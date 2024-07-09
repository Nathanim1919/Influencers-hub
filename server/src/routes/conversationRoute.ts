import express from "express";

import {
  getAllConversations,
  createConversation,
  getConversationById,
  sendMessage,
} from "../controllers/conversationController";

const router = express.Router();

router.get("/", getAllConversations);
router.post("/create", createConversation);
router.get("/:conversationId", getConversationById);
router.post("/sendMessage", sendMessage);

export default router;


/**
 * {
  "statusCode": 201,
  "data": {
    "participants": [
      {
        "participantId": "668934199d17d13ca5e12b11",
        "participantType": "Brand"
      },
      {
        "participantId": "668af4943f0afac9f3b31ff4",
        "participantType": "Influencer"
      }
    ],
    "_id": "668b2245cdff1622be07b9de",
    "messages": [],
    "createdAt": "2024-07-07T23:18:29.211Z",
    "updatedAt": "2024-07-07T23:18:29.211Z",
    "__v": 0
  },
  "message": "Conversation created successfully",
  "success": true
}
 */
