import mongoose from "mongoose";
import { IInfluencer } from "../interfaces/IInfluencer";
import { UserRole } from "../utils/userRoles";

const influencerSchema = new mongoose.Schema<IInfluencer>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: Object.values(UserRole),
    default: UserRole.influencer,
  },
  profilePictureUrl: { type: String, required: true },
  bio: { type: String, required: true },
  location: { type: String, required: true },
  niche: { type: String, required: true },
  socialMediaAccounts: [
    {
      platform: { type: String, required: true },
      username: { type: String, required: true },
      followerCount: { type: Number, required: true },
      engagementRate: { type: Number, required: true },
    },
  ],
  campaignHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Influencer = mongoose.model<IInfluencer>("Influencer", influencerSchema);

export default Influencer;
