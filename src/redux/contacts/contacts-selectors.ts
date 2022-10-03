import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const getContacts = (state: RootState): RootState['contacts']['items'] =>
  state.contacts.items;
export const getFilter = (state: RootState): RootState['contacts']['filter'] =>
  state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (
    contacts: RootState['contacts']['items'],
    filter: string,
  ): RootState['contacts']['items'] => {
    const normalizedFilter: string = filter.toLowerCase();

    return contacts.filter(element =>
      element.name.toLowerCase().includes(normalizedFilter.trim()),
    );
  },
);
