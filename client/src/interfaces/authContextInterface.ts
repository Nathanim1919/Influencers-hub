import { IUser } from "./userInterface";

export interface IAuthContext {
  user: IUser | null;
  login: (user: IUser) => Promise<void>;
  register: (user: IUser) => Promise<void>;
  logout: () => Promise<void>;
}
