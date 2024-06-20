export interface IMessage {
    _id: string;
    senderId: string;
    receiverId: string;
    campaignId: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}