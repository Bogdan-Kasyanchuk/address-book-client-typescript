import { createAction } from '@reduxjs/toolkit';

export const filterContact = createAction<string>('contact/Filter');
