import { IUser } from '.';

export interface IAuth {
  message: string;
  user: IUser;
  token: string;
}
