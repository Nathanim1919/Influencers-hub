// custom.d.ts
import { Application } from "express";
import { ObjectId } from "mongoose";
import { UserRole } from "../utils/userRoles";
import { Server } from "socket.io";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      _id: ObjectId;
      role: UserRole;
      // Add other properties of the user object as needed
    };
    io:Server;
    app: Application;
  }
}
