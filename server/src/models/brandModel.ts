import mongoose, { Schema } from "mongoose";
import { IBrand } from "../interfaces/IBrand";

const brandSchema = new Schema<IBrand>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  brandName: { type: String, required: false },
  logoUrl: { type: String, required: false },
  website: { type: String, required: false },
  bio: { type: String, required: false },
  industry: { type: String, required: false },
  contactPerson: { type: String, required: false },
  contactEmail: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  location: { type: String, required: false },
  campaigns: { type: [String], required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Brand = mongoose.model<IBrand>("Brand", brandSchema);

export default Brand;
