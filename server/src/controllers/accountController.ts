import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import redisClient from "../utils/redisClient";
import Brand from "../models/brandModel";
import Influencer from "../models/influencerModel";
import ApiResponse from "../utils/apiResponse";
import { UserRole } from "../utils/userRoles";

// Check for JWT secrets availability
const checkJwtSecrets = () => {
  if (
    !process.env.JWT_ACCESS_TOKEN_SECRET ||
    !process.env.JWT_REFRESH_TOKEN_SECRET
  ) {
    throw new Error(
      "JWT secrets are not defined in the environment variables."
    );
  }
};

// Generate JWT tokens
const generateTokens = (user: { _id: string; role: string }) => {
  checkJwtSecrets();
  const accessToken = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  console.log("Tokens generated successfully");

  return { accessToken, refreshToken };
};

// Set cookies for tokens
const setTokenCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string
) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  console.log("Cookies set successfully");
};

// Find user by role
const findUserByRole = async (_id: string, role: string) => {
  if (role === UserRole.brand.toLocaleLowerCase()) {
    console.log("User found successfully");
    return await Brand.findById(_id);
  } else {
    return await Influencer.findById(_id);
  }
};

// Handle token refresh
const refreshTokenIfNeeded = async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = req.cookies;
  console.log("Cookies received: ", accessToken, refreshToken);
  const { exp } = jwt.decode(accessToken) as { exp: number };

  if (Date.now() < exp * 1000) return; // Token not expired

  if (!refreshToken) throw new Error("Unauthorized");

  const { _id, role } = jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_TOKEN_SECRET!
  ) as { _id: string; role: string };
  const redisRefreshToken = await redisClient.get(`refreshToken_${_id}`);
  if (refreshToken !== redisRefreshToken) throw new Error("Unauthorized");

  const user = await findUserByRole(_id, role);
  if (!user) throw new Error("User not found");

  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    generateTokens({ _id: user._id, role });
  await redisClient.setEx(`refreshToken_${user._id}`, 806000, newRefreshToken);

  setTokenCookies(res, newAccessToken, newRefreshToken);

  console.log("Tokens refreshed successfully");
};

export const myAccount = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("Request received");
      checkJwtSecrets();
      await refreshTokenIfNeeded(req, res);

      const { accessToken } = req.cookies;
      const { _id, role } = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_TOKEN_SECRET!
      ) as { _id: string; role: string };

      const user = await findUserByRole(_id, role);

      if (!user) throw new Error("User not found");

      // Respond with the user
      res
        .status(200)
        .json(new ApiResponse(200, user, "User found successfully"));
    } catch (error) {
      if (error instanceof Error)
        res.status(500).json({ error: error.message });
      else res.status(500).json({ error: "An unknown error occurred" });
    }
  }
);
