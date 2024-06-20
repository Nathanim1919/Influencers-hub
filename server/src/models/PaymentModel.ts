import { Schema, model } from "mongoose";
import { IPayment } from "../interfaces/IPayment";

const paymentSchema = new Schema<IPayment>({
  influencerId: { type: String, required: true },
  brandId: { type: String, required: true },
  campaignId: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  transactionId: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Payment = model<IPayment>("Payment", paymentSchema);

export default Payment;
