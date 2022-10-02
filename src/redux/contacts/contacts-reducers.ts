import { createReducer } from '@reduxjs/toolkit';
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

export const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(getContact.fulfilled, (state, { payload }) => {
      state.items = payload;
    })
    .addCase(addContact.fulfilled, (state, { payload }) => {
      state.items = [payload, ...state.items];
    })
    .addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.items = state.items.filter(element => element._id !== payload);
    })
    .addCase(updateContact.fulfilled, (state, { payload }) => {
      state.items = state.items.map(element =>
        element._id === payload._id ? payload : element,
      );
    })
    .addCase(editFavoriteContact.fulfilled, (state, { payload }) => {
      state.items = state.items.map(element =>
        element._id === payload._id ? payload : element,
      );
    })
    .addCase(deleteAvatarContact.fulfilled, (state, { payload }) => {
      state.items = state.items.map(element =>
        element._id === payload._id ? payload : element,
      );
    })
    .addCase(filterContact, (state, { payload }) => {
      state.filter = payload;
    });
});
