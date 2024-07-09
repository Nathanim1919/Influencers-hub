import { IApplication } from "../interfaces/IApplication";
import mongoose, { Schema, model } from "mongoose";

const applicationSchema = new Schema<IApplication>({
  influencerId: { type: mongoose.Schema.Types.ObjectId, ref:'Influencer',required: true },
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref:"Campaign", required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  Proposal: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Application = model<IApplication>("Application", applicationSchema);

export default Application;
