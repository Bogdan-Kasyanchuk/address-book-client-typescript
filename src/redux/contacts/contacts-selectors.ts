import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IContact } from '../../interfaces';

export const getContacts = (state: RootState): IContact[] =>
  state.contacts.items;
export const getFilter = (state: RootState): string => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts: IContact[], filter: string): IContact[] => {
    const normalizedFilter: string = filter.toLowerCase();

    return contacts.filter(element =>
      element.name.toLowerCase().includes(normalizedFilter.trim()),
    );
  },
);
