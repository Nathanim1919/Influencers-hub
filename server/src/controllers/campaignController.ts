import { Request, Response } from "express";
import Campaign from "../models/campaignModel";
import { ObjectId, Types } from "mongoose";
import ApiResponse from "../utils/apiResponse";
import Application from "../models/applicationModel";

export const createCampaign = async (req: Request, res: Response) => {
  try {
    // Check if req.user exists and has _id
    console.log(req.user);
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
    res
      .status(201)
      .json(new ApiResponse(201, campaign, "Campaign Created SuccessFully"));
  } catch (error) {
    // Handle the error, possibly sending an error response
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An Unknown Error Occured");
    }
  }
};

export const getAllCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find()
      .populate("brandId")
      .populate("applications");
    console.log(campaigns);

    res
      .status(201)
      .json(new ApiResponse(201, campaigns, "Campaigns Fetched SuccessFully"));
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send({ message: "An Unknown Error Has occured" });
    }
  }
};

export const getCampaignById = async (req: Request, res: Response) => {
  try {
    const campaign = await Campaign.findById(req.params.id)
      .populate("brandId")
      .populate("applications");

    if (!campaign) {
      res.status(404).send("Campaign not found");
    } else {
      res
        .status(200)
        .json(new ApiResponse(200, campaign, "Campaign Fetched SuccessFully"));
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An Unknown Error Occured");
    }
  }
};

export const updateCampaign = async (req: Request, res: Response) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      res.status(404).send("Campaign not found");
    } else {
      const updatedCampaign = await Campaign.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res
        .status(200)
        .json(
          new ApiResponse(200, updatedCampaign, "Campaign Updated SuccessFully")
        );
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An Unknown Error Occured");
    }
  }
};

export const deleteCampaign = async (req: Request, res: Response) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      res.status(404).send("Campaign not found");
    } else {
      await Campaign.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json(new ApiResponse(200, null, "Campaign Deleted SuccessFully"));
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An Unknown Error Occured");
    }
  }
};

export const approveInfluencer = async (req: Request, res: Response) => {
  // Inside approveInfluencer controller
  try {
    const campaign = await Campaign.findById(new Types.ObjectId(req.params.campaignId));
   
    if (!campaign) {
      res.status(404).send("Campaign not found");
    } else {
      const updatedCampaign = await Campaign.findByIdAndUpdate(
        req.params.campaignId,
        {
          $push: { approvedInfluencers: new Types.ObjectId(req.params.influencerId) },
        },
        { new: true }
      );

      // change the status of the application to approved
      const application = await Application.findOneAndUpdate({
        influencerId: req.params.influencerId,
        campaignId: req.params.campaignId,
      }, {
        status: "approved"
      })

      console.log(application);

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            application,
            "Influencer Approved SuccessFully"
          )
        );
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An Unknown Error Occured");
    }
  }
};
