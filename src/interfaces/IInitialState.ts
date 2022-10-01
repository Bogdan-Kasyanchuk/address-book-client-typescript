import { IContact, IUser } from '.';

export interface IInitialState {
  contacts: {
    items: IContact[];
    filter: string;
  };
  auth: {
    user: IUser;
    token: null | string;
    isLoggedIn: boolean;
    isFetchingCurrentUser: boolean;
  };
  loading: boolean;
  error: any;
}
