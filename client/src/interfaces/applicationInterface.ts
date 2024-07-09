import { Campaign } from "./campaignInterface";
import { Influencer } from "./influencerInterface";

export interface IApplication {
    _id: string;
    influencerId: Influencer;
    campaignId: Campaign;
    status: string;
    Proposal: string;
    portfolio: string[];
    createdAt: Date;
    updatedAt: Date;
    feedback: string;
}