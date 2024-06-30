// custom.d.ts
import { ObjectId } from "mongoose";
import { UserRole } from "../utils/userRoles";

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      _id: ObjectId;
      role: UserRole;
      // Add other properties of the user object as needed
    }
  }
}