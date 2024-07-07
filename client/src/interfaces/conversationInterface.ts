import { IBrand } from "./brandInterface";
import { Influencer } from "./influencerInterface";
import { IMessage } from "./messageInterface";

export interface conversation {
    _id: string;
    participants: IBrand[] | Influencer[] | null;
    messages: IMessage[];
}