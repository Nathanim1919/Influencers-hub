import { ObjectId } from "mongoose";
import { UserRole } from "../utils/userRoles";

export interface IInfluencer {
    _id: ObjectId;
    fullName: string;
    password: string;
    email: string;
    role: UserRole;
    profilePictureUrl: string;
    bio: string;
    location: string;
    niche: string;
    socialMediaAccounts: {
        platform: string;
        username: string;
        followerCount: number;
        engagementRate: number;
    }[];
    campaignHistory: string[];
    savedCampaigns: string[];
    appliedCampaigns: string[];
    createdAt: Date;
    updatedAt: Date;
}
