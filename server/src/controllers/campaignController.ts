import { Request, Response } from "express";
import Campaign from "../models/campaignModel";
import { ObjectId } from "mongoose";
import ApiResponse from "../utils/apiResponse";


export const createCampaign = async (req: Request, res: Response) => {
    try {
      // Check if req.user exists and has _id
      if (!req.user || !req.user._id) {
        return res.status(400).send("User information is missing.");
      }
  
      const campaignData = {
        ...req.body,
        brandId: req.user._id.toString(), // Convert ObjectId to string
      };
  
      const campaign = new Campaign(campaignData);
      console.log(campaign);
  
      await campaign.save();
  
      // Send a success response
      res.status(201).json(
        new ApiResponse(201, campaign, "Campaign Created SuccessFully")
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


