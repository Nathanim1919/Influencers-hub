import { Schema, model } from "mongoose";
import { INotification } from "../interfaces/INotification";

const notificationSchema = new Schema<INotification>({
  receiverId: { type: String, required: true },
  message: { type: String, required: true },
  notificationType: ["message", "application", "campaign", "proposal"],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Notification = model<INotification>("Notification", notificationSchema);

export default Notification;

