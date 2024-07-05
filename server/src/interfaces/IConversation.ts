import { ObjectId } from "mongoose";
import { IMessage } from "./IMessage";
export interface IConversation {
    _id: ObjectId;
    message: IMessage;
    participants: string[];
    createdAt: Date;
    updatedAt: Date;
}