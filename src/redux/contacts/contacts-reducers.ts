import { createReducer, combineReducers } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import initialState from '../initialState';
import {
  getContact,
  addContact,
  deleteContact,
  updateContact,
  editFavoriteContact,
  deleteAvatarContact,
} from './contacts-operations';
import { filterContact } from './contacts-action';
import { IContact } from '../../interfaces';

const itemsReducer = createReducer(initialState.contacts.items, {
  [getContact.fulfilled.type]: (_, action: PayloadAction<IContact[]>) =>
    action.payload,

  [addContact.fulfilled.type]: (state, action: PayloadAction<IContact>) => [
    action.payload,
    ...state,
  ],

  [deleteContact.fulfilled.type]: (state, action: PayloadAction<string>) =>
    state.filter(element => element._id !== action.payload),

  [updateContact.fulfilled.type]: (state, action: PayloadAction<IContact>) =>
    state.map(element =>
      element._id === action.payload._id ? action.payload : element,
    ),

  [editFavoriteContact.fulfilled.type]: (
    state,
    action: PayloadAction<IContact>,
  ) =>
    state.map(element =>
      element._id === action.payload._id ? action.payload : element,
    ),

  [deleteAvatarContact.fulfilled.type]: (
    state,
    action: PayloadAction<IContact>,
  ) =>
    state.map(element =>
      element._id === action.payload._id ? action.payload : element,
    ),
});

const filterReducer = createReducer(initialState.contacts.filter, {
  [filterContact.type]: (_, action: PayloadAction<string>) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
