import { Campaign } from "./campaignInterface";

export interface IBrand {
    _id?: string;
    brandName?: string;
    email: string;
    password: string;
    role?: string;
    fullName?: string;
    location?: string;
    campaigns?:Campaign[];
    website?: string;
    bio?: string;
    industry?: string;
    contactPerson?: string;
    contactEmail?: string;
    phoneNumber?: string;
    niche?: string;
    brandLogo?: string;
    socialMediaAccounts?: {
        platform: string;
        username: string;
        followerCount?: number;
        engagementRate?: number;
    }[];
    createdAt?: Date;
    updatedAt?: Date;
}