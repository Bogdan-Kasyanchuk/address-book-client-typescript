import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import {
  registerUser,
  logInUser,
  logOutUser,
  currentUser,
  updateUser,
  deleteAvatarUser,
} from './auth-operations';

export const authReducer = createReducer(initialState.auth, builder => {
  builder
    .addCase(registerUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    })
    .addCase(logInUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    })
    .addCase(logOutUser.fulfilled, state => {
      state.user = {
        name: null,
        email: null,
        avatarUrl: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(currentUser.pending, state => {
      state.isFetchingCurrentUser = true;
    })
    .addCase(currentUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    })
    .addCase(currentUser.rejected, state => {
      state.isFetchingCurrentUser = false;
    })
    .addCase(updateUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(deleteAvatarUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
});

export type AuthReducer = ReturnType<typeof authReducer>;
