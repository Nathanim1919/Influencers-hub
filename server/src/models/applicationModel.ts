import { IApplication } from "../interfaces/IApplication";
import { Schema, model } from "mongoose";

const applicationSchema = new Schema<IApplication>({
  influencerId: { type: String, required: true },
  campaignId: { type: String, required: true },
  status: { type: String, required: true },
  Proposal: { type: String, required: true },
  portfolio: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  feedback: { type: String, required: true },
});

const Application = model<IApplication>("Application", applicationSchema);

export default Application;
