export interface IApplication {
    _id: string;
    influencerId: string;
    campaignId: string;
    status: string;
    Proposal: string;
    portfolio: string[];
    createdAt: Date;
    updatedAt: Date;
    feedback: string;
}