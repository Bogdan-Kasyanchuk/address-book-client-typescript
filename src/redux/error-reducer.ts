import { createReducer } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';
import {
  getContact,
  addContact,
  deleteContact,
  updateContact,
  editFavoriteContact,
  deleteAvatarContact,
} from './contacts/contacts-operations';
import {
  registerUser,
  logInUser,
  logOutUser,
  currentUser,
  updateUser,
  deleteAvatarUser,
} from './auth/auth-operations';

export const errorReducer = createReducer(initialState.error, {
  [getContact.rejected.type]: (_, action: PayloadAction<any>) => action.payload,
  [getContact.pending.type]: () => null,
  [addContact.rejected.type]: (_, action: PayloadAction<any>) => action.payload,
  [addContact.pending.type]: () => null,
  [deleteContact.rejected.type]: (_, action: PayloadAction<any>) =>
    action.payload,
  [deleteContact.pending.type]: () => null,
  [updateContact.rejected.type]: (_, action: PayloadAction<any>) =>
    action.payload,
  [updateContact.pending.type]: () => null,
  [editFavoriteContact.rejected.type]: (_, action: PayloadAction<any>) =>
    action.payload,
  [editFavoriteContact.pending.type]: () => null,
  [deleteAvatarContact.rejected.type]: (_, action: PayloadAction<any>) =>
    action.payload,
  [deleteAvatarContact.pending.type]: () => null,
  [registerUser.rejected.type]: (_, action: PayloadAction<any>) =>
    action.payload,
  [registerUser.pending.type]: () => null,
  [logInUser.rejected.type]: (_, action: PayloadAction<any>) => action.payload,
  [logInUser.pending.type]: () => null,
  [logOutUser.rejected.type]: (_, action: PayloadAction<any>) => action.payload,
  [logOutUser.pending.type]: () => null,
  [currentUser.rejected.type]: (_, action: PayloadAction<any>) =>
    action.payload,
  [currentUser.pending.type]: () => null,
  [updateUser.rejected.type]: (_, action: PayloadAction<any>) => action.payload,
  [updateUser.pending.type]: () => null,
  [deleteAvatarUser.rejected.type]: (_, action: PayloadAction<any>) =>
    action.payload,
  [deleteAvatarUser.pending.type]: () => null,
});
