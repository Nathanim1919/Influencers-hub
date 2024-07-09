import { IBrand } from "./brandInterface";
import { Influencer } from "./influencerInterface";
import { IMessage } from "./messageInterface";

export interface IConversation {
  _id: string;
  participants: Array<{
    participantId: IBrand | Influencer;
  }>;
  messages: IMessage[];
}