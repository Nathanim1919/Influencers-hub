import mongoose from "mongoose";

import { ICampaign } from "../interfaces/ICampaign";

const campaignSchema = new mongoose.Schema<ICampaign>({
  brandId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  objectives: [{ type: String, required: true }],
  targetAudience: {
    ageRange: [{ type: Number, required: true }],
    gender: { type: String, required: true },
    location: { type: String, required: true },
    interests: [{ type: String, required: true }],
  },
  deliverables: [{ type: String, required: true }],
  budget: { type: Number, required: true },
  timeline: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  preferredPlatforms: [{ type: String, required: true }],
  influencerCriteria: {
    niche: [{ type: String, required: true }],
    followerCount: [{ type: Number, required: true }],
    engagementRate: { type: Number, required: true },
  },
  hashtags: [{ type: String, required: true }],
  status: { type: String, required: true },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
  approvedInfluencers: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Influencer" },
  ],
  performanceMetrics: {
    reach: { type: Number, required: true },
    engagement: { type: Number, required: true },
    roi: { type: Number, required: true },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Campaign = mongoose.model<ICampaign>("Campaign", campaignSchema);

export default Campaign;
