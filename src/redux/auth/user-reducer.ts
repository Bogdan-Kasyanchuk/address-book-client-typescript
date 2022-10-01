import { createReducer } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import initialState from '../initialState';
import {
  registerUser,
  logInUser,
  logOutUser,
  currentUser,
  updateUser,
  deleteAvatarUser,
} from './auth-operations';
import { IAuth, IUser } from '../../interfaces';

export const userReducer = createReducer(initialState.auth.user, {
  [registerUser.fulfilled.type]: (_, action: PayloadAction<IAuth>) =>
    action.payload.user,
  [logInUser.fulfilled.type]: (_, action: PayloadAction<IAuth>) =>
    action.payload.user,
  [logOutUser.fulfilled.type]: () => ({
    name: null,
    email: null,
    avatarUrl: null,
  }),
  [currentUser.fulfilled.type]: (_, action: PayloadAction<IAuth>) =>
    action.payload.user,
  [updateUser.fulfilled.type]: (_, action: PayloadAction<IUser>) =>
    action.payload,
  [deleteAvatarUser.fulfilled.type]: (_, action: PayloadAction<IUser>) =>
    action.payload,
});
