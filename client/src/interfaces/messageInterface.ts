export interface IMessage {
    _id?: string;
    sender: string;
    text: string;
    isLast: boolean;
    createdAt: Date;
    updatedAt: Date;
}