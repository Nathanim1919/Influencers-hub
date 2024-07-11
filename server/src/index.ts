import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import {createServer} from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import socialLinkRoute from "./routes/socialLinksRoute";


// routes
import authRoute from "./routes/authRoute";
import campaignRoute from "./routes/campaignRoutes";
import brandRoute from "./routes/brandRoutes";
import influencerApi from "./routes/influencerRoutes";

import dotenv from "dotenv";
import { dot } from "node:test/reporters";
import { verifyUser } from "./middlewares/authMiddleware";
import conversationRoute from "./routes/conversationRoute";

dotenv.config();



const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

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
app.use("/api/conversation",verifyUser, conversationRoute);
app.use("/api/socialLinks", verifyUser, socialLinkRoute);


// Socket connection
io.on("connection", (socket) => {
  console.log("New client connected");
  
  socket.on('sendMessage', async (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("typing", (username) => {
    socket.emit("typing", username);
  });

  socket.on("stopTyping", () => {
    socket.emit("stopTyping");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 5000;
// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
httpServer.listen(PORT, () => {
  console.log(`Server with Socket.IO is running on port ${PORT}`);
});