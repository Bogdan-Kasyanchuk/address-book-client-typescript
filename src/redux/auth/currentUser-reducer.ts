import { createReducer } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { currentUser } from './auth-operations';

export const currentUserReducer = createReducer(
  initialState.auth.isFetchingCurrentUser,
  {
    [currentUser.fulfilled.type]: () => false,
    [currentUser.pending.type]: () => true,
    [currentUser.rejected.type]: () => false,
  },
);
