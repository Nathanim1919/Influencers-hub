import { Campaign } from "./campaignInterface";

export interface Influencer {
    id: number;
    fullName?: string;
    password?: string;
    email?: string;
    role?: string;
    profilePictureUrl?: string;
    bio?: string;
    location?: string;
    niche?: string;
    socialMediaAccounts?: {
      platform: string;
      username: string;
      followerCount?: number;
      engagementRate?: number;
    }[];
    campaignHistory?: Campaign[];
    createdAt?: Date;
    updatedAt?: Date;
}