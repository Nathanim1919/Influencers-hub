export interface IUser {
  _id?: string;
  email: string;
  password: string;
  role?: string;
  fullName?: string;
  brandName?: string;
  location?: string;
  niche?: string;
}


export interface RegisterUser {
    email: string;
    password: string;
}