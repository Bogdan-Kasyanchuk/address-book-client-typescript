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
  loading: false,
  error: null,
};

export default initialState;
