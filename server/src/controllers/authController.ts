import { Request, Response } from "express";
import Brand from "../models/brandModel";
import bcrypt from "bcrypt";
import { asyncHandler } from "../utils/asyncHandler";
import ApiResponse from "../utils/apiResponse";
import jwt from "jsonwebtoken";
import redisClient from "../utils/redisClient";

export const register = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new brand document
      const newBrand = new Brand({
        ...req.body,
        password: hashedPassword // Store the hashed password instead of the plain one
      });

      console.log(newBrand);
      await newBrand.save();

      // Respond with the inserted brand or a success message
      res
        .status(201)
        .json(new ApiResponse(201, newBrand, "Brand registered successfully"));
    } catch (error) {
      // Handle errors (e.g., email already exists)
      res.status(400).json({ error: error?.message });
    }
  }
);

export const login = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      const brand = await Brand.findOne({ email });
      if (!brand) {
        throw new Error("Brand not found");
      }
      const isMatch = await bcrypt.compare(password, brand.password);
      if (!isMatch) {
        throw new Error("Invalid credentials");
      }

      // Create a JWT token
      const accessToken = jwt.sign(
        { _id: brand._id },
        "process.env.JWT_ACCESS_TOKEN_SECRET!"
      );
      const refreshToken = jwt.sign(
        { _id: brand._id },
        "process.env.JWT_REFRESH_TOKEN_SECRET!" // Corrected environment variable name
      );

      // Save token in redis
      await redisClient.set(`refresh_${brand._id}`, refreshToken);

      // Save cookie
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      // Respond with the brand or a success message
      res.status(200).json(new ApiResponse(200, brand, "Brand logged in"));
    } catch (error) {
      res.status(400).json({ error: error?.message });
    }
  }
);

export const myAccount = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Find the brand by the ID stored in the JWT token
      const {accessToken} = req.cookies;
      if (!accessToken) {
        throw new Error("Unauthorized");
      }

      const { _id } = jwt.verify(accessToken, "process.env.JWT_ACCESS_TOKEN_SECRET!") as { _id: string };
      const brand = await Brand.findById(_id);
      if (!brand) {
        throw new Error("Brand not found");
      }

      // Respond with the brand
      res.status(200).json(new ApiResponse(200, brand, "Brand found"));
    } catch (error) {
      res.status(400).json({ error: error?.message });
    }
  }
);

export const logout = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Remove the refresh token from redis
      const {accessToken, refreshToken} = req.cookies;
      if (!accessToken || !refreshToken) {
        throw new Error("Unauthorized");
      }

      const { _id } = jwt.verify(accessToken, "process.env.JWT_ACCESS_TOKEN_SECRET!") as { _id: string };
      await redisClient.del(`refresh_${_id}`);

      // Clear cookies
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      // Respond with a success message
      res.status(200).json(new ApiResponse(200, null, "Brand logged out"));
    } catch (error) {
      res.status(400).json({ error: error?.message });
    }
  }
);