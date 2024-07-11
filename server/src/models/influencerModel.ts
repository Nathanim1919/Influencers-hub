import mongoose from "mongoose";
import { IInfluencer } from "../interfaces/IInfluencer";
import { UserRole } from "../utils/userRoles";

const influencerSchema = new mongoose.Schema<IInfluencer>({
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: Object.values(UserRole),
    default: UserRole.influencer,
  },
  profilePictureUrl: { type: String, required: false },
  bio: { type: String, required: false },
  location: { type: String, required: false },
  niche: { type: String, required: false },
  socialMediaAccounts: [
    {
      platform: { type: String, required: true },
      username: { type: String, required: true },
      profilePictureUrl: { type: String, required: false },
      // followerCount: { type: Number, required: false },
      // engagementRate: { type: Number, required: false },
    },
  ],
  campaignHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
  savedCampaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
  appliedCampaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Influencer = mongoose.model<IInfluencer>("Influencer", influencerSchema);

export default Influencer;
