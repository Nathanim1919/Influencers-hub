export interface IMessage {
    _id: string;
    senderId: string;
    receiverId: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
}