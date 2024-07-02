import { ObjectId } from "mongoose";

export interface ICampaign {
    id: string;
    brandId: ObjectId;
    title: string;
    description: string;
    objectives: string[];
    targetAudience: {
        ageRange: [number, number];
        gender: string;
        location: string;
        interests: string[];
    };
    deliverables: string[];
    budget: number;
    timeline: {
        startDate: Date;
        endDate: Date;
    };
    preferredPlatforms: string[];
    influencerCriteria: {
        niche: string[];
        followerCount: [number, number];
        engagementRate: number;
    };
    hashtags: string[];
    status: string;
    applications: string[];
    approvedInfluencers: string[];
    performanceMetrics: {
        reach: number;
        engagement: number;
        roi: number;
    };
    createdAt: Date;
    updatedAt: Date;
}
