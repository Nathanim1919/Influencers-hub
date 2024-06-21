import jwt from "jsonwebtoken";
import Influencer from "../models/influencerModel";
import { IInfluencer } from "../interfaces/IInfluencer";
import redisClient from "./redisClient";
import bcrypt from "bcrypt";
import { BaseDocument } from "../interfaces/BaseDocument";
import dbClient from "./dbClient";

// auth helper functions

// generate token and save to redis as key auth_token:userId
// Adjusted generateToken function to include refresh token generation and storage
export const generateToken = async <T extends BaseDocument>(user: T): Promise<{ accessToken: string, refreshToken: string }> => {
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
  
    // Store access token with a short expiration
    await redisClient.setEx(`access_token:${user._id}`, 900, accessToken); // 900 seconds = 15 minutes
  
    // Store refresh token with a longer expiration
    await redisClient.setEx(`refresh_token:${user._id}`, 604800, refreshToken); // 604800 seconds = 7 days
  
    return { accessToken, refreshToken };
  };

// verify token
export const getUserByToken = async <T extends BaseDocument>(
  authorizationHeader: string | undefined
): Promise<T | null> => {
  if (!authorizationHeader) {
    return null;
  }
  const token = authorizationHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;
    const userId = decoded.id;

    // check if token is in redis
    const tokenInRedis = await redisClient.get(`auth_:${userId}`);
    if (!tokenInRedis || tokenInRedis !== token) {
      return null;
    }

    // TODO: check if user exists in the database
    const user = await dbClient.getDocumentById<T>("influencers", userId);
    return user;
  } catch (error) {
    // Token verification failed
    return null;
  }
};

// invalidate token
export const invalidateToken = async (userId: string): Promise<void> => {
  return redisClient.del(`auth_:${userId}`);
};

// authenticate influencer
export const authenticateInfluencer = async (
  email: string,
  password: string
): Promise<IInfluencer | null> => {
  const influencer = await Influencer.findOne({ email: email });
  if (!influencer) {
    return null;
  }
  const isMatch = await influencer.comparePassword(password);
  return isMatch ? influencer : null;
};

// hash password
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

// compare password
export const comparePassword = async (password, hash): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
