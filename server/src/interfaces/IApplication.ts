import { ICampaign } from "./ICampaign";
import { IInfluencer } from "./IInfluencer";

export interface IApplication {
    _id: string;
    influencerId: IInfluencer;
    campaignId: ICampaign;
    status: string;
    Proposal: string;
    portfolio: string[];
    createdAt: Date;
    updatedAt: Date;
    feedback: string;
}