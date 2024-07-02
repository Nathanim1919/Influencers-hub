import Brand from "../models/brandModel";
import Campaign from "../models/campaignModel";
import ApiResponse from "../utils/apiResponse";
import { Request, Response } from "express";

export const getBrandCampaigns = async (req: Request, res: Response) => {
    try {
      // Check if req.user exists and has _id
      if (!req.user || !req.user._id) {
        return res.status(400).send("User information is missing.");
      }
  
      const campaigns = await Campaign.find({ brandId: req.user._id }).populate("brandId");
  
      // Send a success response
      res.status(200).json(
        new ApiResponse(200, campaigns, "Campaigns found successfully")
      );
    } catch (error) {
      // Handle the error, possibly sending an error response
      if (error instanceof Error){
          res.status(500).send(error.message);
      } else {
        res.status(500).send("An Unknown Error Occured");
      }
    }
  };