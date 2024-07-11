// Conversation controller

import { Request, Response } from "express";
import Conversation from "../models/conversationModel";
import ApiResponse from "../utils/apiResponse";
import { Types } from "mongoose";

// Get all conversations
export const getAllConversations = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("User: ", req.user?._id);
  try {
    const conversations = await Conversation.find({
      participants: { $elemMatch: { participantId: req.user?._id } },
    })
      .populate("participants.participantId") // Populate participant details
      .populate("messages.sender"); // Populate sender details within messages

    res
      .status(200)
      .json(
        new ApiResponse(
          201,
          conversations,
          "All conversations retrieved successfully"
        )
      );
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while retrieving conversations" });
    }
  }
};

// Create a new conversation
export const createConversation = async (req: Request, res: Response) => {
  console.log("Request body: ", req.body);
  const firstParticpantId = req.body.participantId;
  const secondParticipantId = req.user?._id;
  const firstParticipantRole = req.body.participantRole;
  const secondParticipantRole = req.user?.role;
  const userId = req.user?._id;

  try {
    // Check if a conversation with these participants already exists
    const existingConversation = await Conversation.findOne({
      participants: {
        $all: [
          {
            participantId: new Types.ObjectId(firstParticpantId),
            participantType: firstParticipantRole,
          },
          {
            participantId: new Types.ObjectId(secondParticipantId),
            participantType: secondParticipantRole,
          },
        ],
      },
    });

    if (existingConversation) {
      // Return the existing conversation if found
      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            existingConversation,
            "Existing conversation returned"
          )
        );
    }

    // If no existing conversation, create a new one
    const newConversation = new Conversation({
      participants: [
        {
          participantId: firstParticpantId,
          participantType: firstParticipantRole,
        },
        {
          participantId: secondParticipantId,
          participantType: secondParticipantRole,
        },
      ],
      messages: [],
    });
    const savedConversation = await newConversation.save();
    res
      .status(201)
      .json(
        new ApiResponse(
          201,
          savedConversation,
          "Conversation created successfully"
        )
      );
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while creating conversation" });
    }
  }
};

// Get a conversation by Id
export const getConversationById = async (req: Request, res: Response) => {
  try {
    const conversation = await Conversation.findById(req.body.conversationId)
      .populate("participants")
      .populate("messages");
    res
      .status(200)
      .json(
        new ApiResponse(
          201,
          conversation,
          "Conversation retrieved successfully"
        )
      );
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while retrieving conversation" });
    }
  }
};

// send a message
export const sendMessage = async (req: Request, res: Response) => {
  try {
    const conversation = await Conversation.findById(req.body.conversationId);
    if (!conversation) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }

    // If there are any messages, set the last message's isLast to false
    if (conversation.messages.length > 0) {
      conversation.messages[conversation.messages.length - 1].isLast = false;
    }

    // Prepare the new message with isLast set to true
    const newMessage = {
      sender: req.user?._id,
      text: req.body.message,
      isLast: true,
    };

    // Add the new message to the conversation
    conversation.messages.push(newMessage);
    
    // Save the updated conversation
    const savedConversation = await conversation.save();
    req.io.emit('message', newMessage);
    res
      .status(201)
      .json(
        new ApiResponse(201, savedConversation, "Message sent successfully")
      );
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while sending message" });
    }
  }
};

// Get all messages in a conversation
export const getMessages = async (req: Request, res: Response) => {
  try {
    const conversation = await Conversation.findById(req.params.id);
    if (!conversation) {
      res.status(404).json({ error: "Conversation not found" });
      return;
    }

    res
      .status(200)
      .json(
        new ApiResponse(
          201,
          conversation.messages,
          "Messages retrieved successfully"
        )
      );
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while retrieving messages" });
    }
  }
};
