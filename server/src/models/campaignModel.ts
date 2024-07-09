import mongoose from "mongoose";

import { ICampaign } from "../interfaces/ICampaign";

const campaignSchema = new mongoose.Schema<ICampaign>({
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  objectives: [{ type: String, required: true }],
  targetAudience: {
    ageRange: [{ type: String, required: true }],
    gender: { type: String, required: false },
    location: { type: String, required: false },
    interests: [{ type: String, required: false }],
  },
  deliverables: [{ type: String, required: true }],
  budget: { type: Number, required: true },
  timeline: {
    startDate: { type: String, required: false },
    endDate: { type: String, required: false },
  },
  preferredPlatforms: [{ type: String, required: true }],
  influencerCriteria: {
    niche: [{ type: String, required: true }],
    followerCount: [{ type: Number, required: true }],
    engagementRate: { type: Number, required: true },
  },
  hashtags: [{ type: String, required: true }],
  status: {
    type: String,
    required: true,
    enum: ["open", "closed"],
    default: "open",
  },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
  approvedInfluencers: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Influencer" },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Campaign = mongoose.model<ICampaign>("Campaign", campaignSchema);

export default Campaign;
