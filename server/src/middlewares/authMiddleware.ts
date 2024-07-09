import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Brand from "../models/brandModel";
import Influencer from "../models/influencerModel";
import { ObjectId } from "mongoose";
import { UserRole } from "../utils/userRoles";
import redisClient from "../utils/redisClient";

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Inside approveInfluencer controller
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);

  const jwtAccessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
  const jwtRefreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;

  console.log("jwtAccessTokenSecret", jwtAccessTokenSecret);
  console.log("jwtRefreshTokenSecret", jwtRefreshTokenSecret);

  if (!jwtAccessTokenSecret || !jwtRefreshTokenSecret) {
    return res.status(500).json({ message: "Internal server error" });
  }

  if (!accessToken && !refreshToken) {

    return res.status(401).json({ message: "Unauthorized, NO ACCESSTOKEN AND" });
  }


  try {
    const decoded = jwt.verify(
      accessToken,
      jwtAccessTokenSecret
    ) as jwt.JwtPayload;
    console.log("decoded", decoded);
    req.user = await findUserByIdAndRole(decoded._id, decoded.role);
    return next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError && refreshToken) {
      try {
        const decodedRefresh = jwt.verify(
          refreshToken,
          jwtRefreshTokenSecret
        ) as jwt.JwtPayload;

        // get refreshToken from redis
        const retriveRefreshTokenFromRedis = await redisClient.get(
          `refreshToken_${decodedRefresh._id}`
        );

        if (retriveRefreshTokenFromRedis !== refreshToken) {
          return res
            .status(401)
            .json({ message: "Unauthorized - Invalid refresh token" });
        }

        const newUserToken = jwt.sign(
          { _id: decodedRefresh._id, role: decodedRefresh.role },
          jwtAccessTokenSecret,
          { expiresIn: "15m" }
        );
        res.cookie("accessToken", newUserToken, {
          httpOnly: true,
          sameSite: "strict",
        });
        req.user = await findUserByIdAndRole(
          decodedRefresh._id,
          decodedRefresh.role
        );
        return next();
      } catch {
        return res
          .status(401)
          .json({ message: "Unauthorized - Invalid refresh token" });
      }
    } else {
      return res.status(401).json({ message: "Unauthorized AND" });
    }
  }
};

async function findUserByIdAndRole(
  _id: ObjectId,
  role: UserRole
): Promise<{ _id: ObjectId; role: UserRole }> {
  let user;
  console.log("role", role);
  console.log("is brand: ",role === UserRole.brand)
  if (role === UserRole.brand.toLocaleLowerCase()) {
    user = await Brand.findById(_id);
    console.log("user", user);
    // Assuming user is not null and has an _id
    if (user) {
      // Convert user object to a string to store in Redis
      const userString = JSON.stringify(user);
      await redisClient.hSet(`brand_${user._id}`, "userDetails", userString);
    }
  } else {
    user = await Influencer.findById(_id);
    // Assuming user is not null and has an _id
    if (user) {
      // Convert user object to a string to store in Redis
      const userString = JSON.stringify(user);
      await redisClient.hSet(
        `influencer_${user._id}`,
        "userDetails",
        userString
      );
    }
  }

  if (!user) {
    throw new Error("User not found");
  }

  // Assuming both Brand and Influencer have a role property
  return { _id: user._id, role: user.role };
}
