import { profile } from "console";
import Influencer from "../models/influencerModel";
import { Request, Response } from "express";
import ApiResponse from "../utils/apiResponse";


export const saveInstagramuserName = async (req: Request, res: Response) => {
    const influencer = await Influencer.findById(req?.user?._id);
    const {instagram} = req.body;
    console.log("instagram: ", instagram)
    if (influencer) {
        const socialMediaAccounts = {
            platform: "Instagram",
            username: instagram,
            profilePictureUrl: `https://www.instagram.com/${instagram}/?__a=1`,
        };
        influencer.socialMediaAccounts.push(socialMediaAccounts);
        const updatedInfluencer = await influencer.save();
        res.json(new ApiResponse(
            201,
            updatedInfluencer,
            "Instagram username added successfully",
        ));
    } else {
        res.status(404);
        throw new Error("Influencer not found");
    }
};