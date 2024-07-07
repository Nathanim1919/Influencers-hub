import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { Server } from "socket.io";
import {createServer} from "http";

// routes
import authRoute from "./routes/authRoute";
import campaignRoute from "./routes/campaignRoutes";
import brandRoute from "./routes/brandRoutes";
import influencerApi from "./routes/influencerRoutes";

import dotenv from "dotenv";
import { dot } from "node:test/reporters";
import { verifyUser } from "./middlewares/authMiddleware";
import conversationRoute from "./routes/conversationRoute";

const port = 5000;
dotenv.config();



const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  },
});
/*
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error("Authentication error"));
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    return next(new Error("Authentication error"));
  }
});
*/
app.set("io", io);

// Middleware
app.use(bodyParser.json());
// Use cookie-parser middleware
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/influencerHUB")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

// Routes
app.use("/api/auth", authRoute);
app.use("/api/campaigns", campaignRoute);
app.use("/api/brands", verifyUser, brandRoute);
app.use("/api/influencer", verifyUser, influencerApi);
app.use("/api/conversations",verifyUser, conversationRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
