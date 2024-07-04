import { ObjectId } from "mongoose";
import { UserRole } from "../utils/userRoles";

export interface IBrand {
  _id: ObjectId;
  password: string;
  email: string;
  brandName: string;
  role: UserRole;
  logoUrl: string;
  website: string;
  bio: string;
  industry: string;
  contactPerson: string;
  contactEmail: string;
  phoneNumber?: string;
  savedInfluencers: string[];
  location: string;
  campaigns: string[];
  createdAt: Date;
  updatedAt: Date;
}
