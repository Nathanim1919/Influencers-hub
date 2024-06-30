export interface IUser {
  _id?: string;
  email: string;
  password: string;
  brandName?: string;
}


export interface RegisterUser {
    email: string;
    password: string;
}