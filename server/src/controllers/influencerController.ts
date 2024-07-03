import Influencer from "../models/influencerModel";
import { Request, Response } from "express";
import ApiResponse from "../utils/apiResponse";

export const getInfluencers = async (req: Request, res: Response) => {
  try {
    const influencers = await Influencer.find();
    res.status(200).json({ influencers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInfluencer = async (req: Request, res: Response) => {
  try {
    const influencer = await Influencer.findById(req.params.id);
    res.status(200).json({ influencer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveInfluencer = async (req: Request, res: Response) => {
  const influencer = new Influencer(req.body);
  try {
    await influencer.save();
    res.status(201).json({ influencer });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(400).json({ message: "An Unknown Error has Occured!" });
    }
  }
};

export const saveCampaign = async (req: Request, res: Response) => {
  try {
    const influencer = await Influencer.findById(req.user?._id);
    if (influencer) {
      influencer.savedCampaigns.push(req.body.campaignId);
      await influencer.save();
      res
        .status(200)
        .json(new ApiResponse(201, null, "Campaign saved successfully"));
    } else {
      res.status(404).json({ message: "Influencer not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An Unknown error occurred" });
    }
  }
};

export const applyToCampaign = async (req: Request, res: Response) => {
  try {
    const influencer = await Influencer.findById(req.user?._id);
    if (influencer) {
      influencer.appliedCampaigns.push(req.body.campaignId);
      await influencer.save();
      res
        .status(200)
        .json(new ApiResponse(201, null, "Campaign applied successfully"));
    } else {
      res.status(404).json({ message: "Influencer not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An Unknown error occurred" });
    }
  }
};

export const getSavedCampaigns = async (req: Request, res: Response) => {
  try {
    const influencer = await Influencer.findById(req.user?._id).populate({
      path: "savedCampaigns",
      populate: {
        path: "brandId",
        model: "Brand",
      },
    });
    if (influencer) {
      res
        .status(200)
        .json(
          new ApiResponse(200, influencer.savedCampaigns, "Saved Campaigns")
        );
    } else {
      res.status(404).json({ message: "Influencer not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An Unknown error occurred" });
    }
  }
};

export const getAppliedCampaigns = async (req: Request, res: Response) => {
  try {
    const influencer = await Influencer.findById(req.user?._id).populate({
      path: "appliedCampaigns",
      populate: {
        path: "brandId",
        model: "Brand",
      },
    });

    if (influencer) {
      res
        .status(200)
        .json(
          new ApiResponse(200, influencer.appliedCampaigns, "Applied Campaigns")
        );
    } else {
      res.status(404).json({ message: "Influencer not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An Unknown error occurred" });
    }
  }
};
