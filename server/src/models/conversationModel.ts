import { Schema, model } from "mongoose";

const participantSchema = new Schema({
  participantId: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'participants.participantType',
  },
  participantType: {
    type: String,
    required: true,
    enum: ['Influencer', 'Brand'], // Specify the allowed models here
  },
}, { _id: false });

const messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  sender: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'messages.senderType',
  },
  senderType: {
    type: String,
    required: true,
    enum: ['Influencer', 'Brand'],
  },
  createdAt: { type: Date, default: Date.now },
}, { _id: false });

const conversationSchema = new Schema({
  participants: [participantSchema],
  messages: [messageSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Conversation = model('Conversation', conversationSchema);
export default Conversation;