import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { IContact, IEditFavoriteContact } from '../../interfaces';

type TAddContact =
  | 'name'
  | 'phone'
  | 'email'
  | 'address'
  | 'other'
  | 'favorite';
type TUpdateContact =
  | '_id'
  | 'name'
  | 'phone'
  | 'email'
  | 'address'
  | 'other'
  | 'fileAvatar';

export const getContact = createAsyncThunk<
  IContact[],
  boolean | string | null,
  { rejectValue: any }
>('contacts/get', async (favorite, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/contacts?favorite=${favorite}`);
    return data.payload.contacts;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const addContact = createAsyncThunk<
  IContact,
  Pick<IContact, TAddContact>,
  { rejectValue: any }
>('contacts/add', async (contact, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/contacts', contact);
    toast.success(data.payload.message);
    return data.payload.contact;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: any }
>('contacts/delete', async (_id, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/contacts/${_id}`);
    toast.success(data.payload.message);
    return _id;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const updateContact = createAsyncThunk<
  IContact,
  Pick<IContact, TUpdateContact>,
  { rejectValue: any }
>(
  'contacts/update',
  async (
    { _id, name, phone, email, address, other, fileAvatar },
    { rejectWithValue },
  ) => {
    try {
      const formData: FormData = new FormData();
      if (fileAvatar) {
        formData.append('avatar', fileAvatar);
      }
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('address', address);
      formData.append('other', other);
      const { data } = await axios.put(`/contacts/${_id}`, formData);
      toast.success(data.payload.message);
      return data.payload.contact;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const editFavoriteContact = createAsyncThunk<
  IContact,
  IEditFavoriteContact,
  { rejectValue: any }
>('contacts/editFavorite', async ({ _id, favorite }, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`/contacts/${_id}/favorite`, {
      favorite,
    });
    toast.success(data.payload.message);
    return data.payload.contact;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const deleteAvatarContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: any }
>('contacts/deleteAvatar', async (_id, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/contacts/${_id}/avatars`);
    toast.success(data.payload.message);
    return data.payload.contact;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});
