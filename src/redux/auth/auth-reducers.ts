import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user-reducer';
import { tokenUserReducer } from './tokenUser-reducer';
import { loggedUserReducer } from './loggedUser-reducer';
import { currentUserReducer } from './currentUser-reducer';

export const authReducer = combineReducers({
  user: userReducer,
  token: tokenUserReducer,
  isLoggedIn: loggedUserReducer,
  isFetchingCurrentUser: currentUserReducer,
});

export type RootReducer = ReturnType<typeof authReducer>;
