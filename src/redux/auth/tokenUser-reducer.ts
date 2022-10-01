import { createReducer } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { registerUser, logInUser, logOutUser } from './auth-operations';
import { IAuth } from '../../interfaces';

export const tokenUserReducer = createReducer(initialState.auth.token, {
  [registerUser.fulfilled.type]: (_, action: PayloadAction<IAuth>) =>
    action.payload.token,
  [logInUser.fulfilled.type]: (_, action: PayloadAction<IAuth>) =>
    action.payload.token,
  [logOutUser.fulfilled.type]: () => null,
});
