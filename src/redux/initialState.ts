import { IInitialState } from '../interfaces';

const initialState: IInitialState = {
  contacts: {
    items: [],
    filter: '',
  },
  auth: {
    user: { name: null, email: null, avatarUrl: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
  },
  other: {
    loading: false,
    error: null,
  },
};

export default initialState;
