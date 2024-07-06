import { Request, Response } from "express";
import Brand from "../models/brandModel";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asyncHandler";
import ApiResponse from "../utils/apiResponse";
import jwt from "jsonwebtoken";
import redisClient from "../utils/redisClient";
import Influencer from "../models/influencerModel";

// Define user roles as constants or enums
enum UserRole {
  Brand = "Brand",
  Influencer = "Influencer",
}

// Potential abstraction for checking email existence
async function checkEmailExists(email) {
  const brandExists = await Brand.findOne({ email });
  const influencerExists = await Influencer.findOne({ email });
  return brandExists || influencerExists;
}

export const register = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, role } = req.body;
      const attributes =
        role === UserRole.Brand
          ? { ...req.body, brandAttributes: { brandName: req.body.brandName } }
          : {
              ...req.body,
              influencerAttributes: {
                fullName: req.body.fullName,
                niche: req.body.niche,
                location: req.body.location,
              },
            };

      if (!Object.values(UserRole).includes(role)) {
        res.status(400).json({ error: "Invalid user role" });
        return;
      }

      if (await checkEmailExists(email)) {
        res.status(400).json({ error: "Email already exists" });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user =
        role === UserRole.Brand
          ? new Brand({ ...attributes, password: hashedPassword })
          : new Influencer({ ...attributes, password: hashedPassword });

      await user.save();

      // Ensure sensitive data is not sent back
      const { password: _, ...userResponse } = user.toObject();
      res
        .status(201)
        .json(
          new ApiResponse(201, userResponse, `${role} registered successfully`)
        );
    } catch (error) {
      const statusCode = error instanceof Error ? 400 : 500;
      res
        .status(statusCode)
        .json({ error: error.message || "An unknown error has occurred" });
    }
  }
);

export const login = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      // Attempt to find the user in both collections
      let user = await Brand.findOne({ email });
      let role = "brand";

      if (!user) {
        user = await Influencer.findOne({ email });
        role = "influencer";
      }

      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      // Check for JWT secrets availability
      if (
        !process.env.JWT_ACCESS_TOKEN_SECRET ||
        !process.env.JWT_REFRESH_TOKEN_SECRET
      ) {
        console.error(
          "JWT secrets are not defined in the environment variables."
        );
        res.status(500).json({ message: "Internal server error" });
        return;
      }

      // Create JWT tokens with user type included
      const accessToken = jwt.sign(
        { _id: user._id, role: role },
        process.env.JWT_ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" } // Set an appropriate expiry for the access token
      );

      const refreshToken = jwt.sign(
        { _id: user._id, role: role },
        process.env.JWT_REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" } // 7dasy
      );

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

   

      // save to redis
      await redisClient.setEx(`refreshToken_${user._id}`, 806000, refreshToken);

      // Proceed with login success response
      res
        .status(200)
        .json(new ApiResponse(200, user, "User loggedIn Successfuly"));
    } catch (error) {
      if (error instanceof Error)
        res.status(500).json({ error: error?.message });
      else res.status(500).json({ error: "An unKnown error occured" });
    }
  }
);


export const logout = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Check for JWT secrets availability
      if (
        !process.env.JWT_ACCESS_TOKEN_SECRET ||
        !process.env.JWT_REFRESH_TOKEN_SECRET
      ) {
        console.error(
          "JWT secrets are not defined in the environment variables."
        );
        res.status(500).json({ message: "Internal server error" });
        return;
      }
      // Remove the refresh token from redis
      const { accessToken, refreshToken } = req.cookies;
      if (!accessToken || !refreshToken) {
        throw new Error("Unauthorized");
      }

      const { _id } = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_TOKEN_SECRET
      ) as { _id: string };
      await redisClient.del(`refresh_${_id}`);

      // Clear cookies
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      // Respond with a success message
      res.status(200).json(new ApiResponse(200, null, "Brand logged out"));
    } catch (error) {
      if (error instanceof Error)
        res.status(500).json({ error: error?.message });
      else res.status(500).json({ error: "An Unknown error occured" });
    }
  }
);
