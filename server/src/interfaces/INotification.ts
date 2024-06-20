export interface INotification {
  _id: string;
  receiverId: string;
  message: string;
  notificationType: [
    "message",
    "application",
    "campaign",
    "proposal",
  ];
  createdAt: Date;
  updatedAt: Date;
}
