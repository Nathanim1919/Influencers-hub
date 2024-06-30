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

export const register = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, role } = req.body;

      // Validate role
      if (!Object.values(UserRole).includes(role)) {
        res.status(400).json({ error: "Invalid user role" });
        return;
      }

      // Check for existing user with the same email
      const existingUser = await Brand.findOne({ email }) || await Influencer.findOne({ email });
      if (existingUser) {
        res.status(400).json({ error: "Email already exists" });
        return
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      let user = null;

      if (role === UserRole.Brand) {
        user = new Brand({
          ...req.body,
          password: hashedPassword,
        });
      } else {
        user = new Influencer({
          ...req.body,
          password: hashedPassword,
        });
      }

      await user.save();

      const successMessage = `${role} registered successfully`;
      res.status(201).json(new ApiResponse(201, user, successMessage));
    } catch (error) {
      if (error instanceof Error)
        res.status(400).json({ error: error.message });
      else
        res.status(500).json({ error: "An unknown error has occurred" });
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
        process.env.JWT_ACCESS_TOKEN_SECRET,
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

export const myAccount = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Find the brand by the ID stored in the JWT token
      const { accessToken } = req.cookies;
      if (!accessToken) {
        throw new Error("Unauthorized");
      }

      const { _id } = jwt.verify(
        accessToken,
        "process.env.JWT_ACCESS_TOKEN_SECRET!"
      ) as { _id: string };
      const brand = await Brand.findById(_id);
      if (!brand) {
        throw new Error("Brand not found");
      }

      // Respond with the brand
      res.status(200).json(new ApiResponse(200, brand, "Brand found"));
    } catch (error) {
      if (error instanceof Error)
        res.status(500).json({ error: error?.message });
      else res.status(500).json({ error: "An unknown error occured" });
    }
  }
);

export const logout = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Remove the refresh token from redis
      const { accessToken, refreshToken } = req.cookies;
      if (!accessToken || !refreshToken) {
        throw new Error("Unauthorized");
      }

      const { _id } = jwt.verify(
        accessToken,
        "process.env.JWT_ACCESS_TOKEN_SECRET!"
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
