import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import tokenService from '../../service/tokenService';
import type { RootState } from '../store';
import {
  IAuth,
  IUser,
  IUserRegister,
  IUserLogIn,
  IUserUpdate,
} from '../../interfaces';

export const registerUser = createAsyncThunk<
  IAuth,
  IUserRegister,
  { rejectValue: any }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/register', credentials);
    tokenService.set(data.payload.token);
    toast.success(data.payload.message);
    return data.payload;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const logInUser = createAsyncThunk<
  IAuth,
  IUserLogIn,
  { rejectValue: any }
>('auth/logIn', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    tokenService.set(data.payload.token);
    toast.success(data.payload.message);
    return data.payload;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const logOutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: any }
>('auth/logOut', async (_, { rejectWithValue }) => {
  try {
    await axios.get('/auth/logout');
    tokenService.unset();
    toast.success('User logout successful');
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const currentUser = createAsyncThunk<
  IAuth,
  undefined,
  { rejectValue: any }
>('users/current', async (_, thunkAPI) => {
  const currentToken = (thunkAPI.getState() as RootState).auth.token;
  if (!currentToken) {
    return thunkAPI.rejectWithValue(_);
  }
  tokenService.set(currentToken);
  try {
    const { data } = await axios.get('users/current');
    return data.payload;
  } catch (error) {
    toast.error(
      thunkAPI.rejectWithValue(error).payload.response.data.payload.message,
    );
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk<
  IUser,
  IUserUpdate,
  { rejectValue: any }
>('users/update', async ({ fileAvatar, name }, { rejectWithValue }) => {
  try {
    const formData: FormData = new FormData();
    if (fileAvatar) {
      formData.append('avatar', fileAvatar);
    }
    formData.append('name', name);
    const { data } = await axios.put(`/users`, formData);
    toast.success(data.payload.message);
    return data.payload.user;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});

export const deleteAvatarUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: any }
>('users/deleteAvatar', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.delete(`/users/avatars`);
    toast.success(data.payload.message);
    return data.payload.user;
  } catch (error) {
    toast.error(rejectWithValue(error).payload.response.data.payload.message);
    return rejectWithValue(error);
  }
});
