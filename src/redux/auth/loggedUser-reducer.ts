import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import {
  registerUser,
  logInUser,
  logOutUser,
  currentUser,
} from './auth-operations';

export const loggedUserReducer = createReducer(initialState.auth.isLoggedIn, {
  [registerUser.fulfilled.type]: () => true,
  [logInUser.fulfilled.type]: () => true,
  [logOutUser.fulfilled.type]: () => false,
  [currentUser.fulfilled.type]: () => true,
});
