export interface IPayment {
    _id: string;
    influencerId: string;
    brandId: string;
    campaignId: string;
    amount: number;
    status: string;
    paymentMethod: string;
    transactionId: string;
    createdAt: Date;
    updatedAt: Date;
}