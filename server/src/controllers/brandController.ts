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


export const getSavedInfluencers = async (req: Request, res: Response) => {
    try {
      // Check if req.user exists and has _id
      if (!req.user || !req.user._id) {
        return res.status(400).send("User information is missing.");
      }
  
      // Find the brand by the id
      const brand = await Brand.findById(req.user._id).populate("savedInfluencers");
  
      // Send a success response
      res.status(200).json(
        new ApiResponse(200, brand?.savedInfluencers, "Influencers found successfully")
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


export const saveInfluencer = async (req: Request, res: Response) => {
    try {
      // Check if req.user exists and has _id
      if (!req.user || !req.user._id) {
        return res.status(400).send("User information is missing.");
      }
  
      // Find the brand by the id
      const brand = await Brand.findById(req.user._id);
  
      // Check if the influencerId is in the request body
      if (!req.body.influencerId) {
        return res.status(400).send("Influencer ID is missing.");
      }
  
      // Check if the influencerId is already saved
      if (brand?.savedInfluencers.includes(req.body.influencerId)) {
        return res.status(400).send("Influencer already saved");
      }
  
      // Add the influencerId to the savedInfluencers array
      brand?.savedInfluencers.push(req.body.influencerId);
  
      // Save the brand
      await brand?.save();
  
      // Send a success response
      res.status(200).json(
        new ApiResponse(200, null, "Influencer saved successfully")
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