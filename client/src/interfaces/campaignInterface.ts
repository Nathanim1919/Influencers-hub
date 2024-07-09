import { IApplication } from "./applicationInterface";
import { IBrand } from "./brandInterface";

export interface Campaign {
    _id: string;
    brandId: IBrand;
    campaignName?: string;
    title?: string;
    description?: string;
    objectives?: string;
    targetAudience?: {
      ageRange: string;
    };
  
    deliverables?: string;
    budget?: number;
    timeline?: {
      startDate: Date;
      endDate: Date;
    };
  
    preferredPlatforms?: string[];
    influencerCriteria?: {
      niche: string[];
      followerCount: number[];
      engagementRate: number;
    };
  
    hashtags?: string;
    status?: string;
    applications?: IApplication[];
    approvedInfluencers?: string[];
    performanceMetrics?: {
      reach: number;
      engagement: number;
      roi: number;
    };
    createdAt?: Date;
    updatedAt?: Date;
  }