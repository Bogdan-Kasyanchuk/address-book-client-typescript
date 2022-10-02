import { configureStore, AnyAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from './contacts/contacts-reducers';
import { authReducer } from './auth/auth-reducer';
import { otherReducer } from './other-reducer';
import middleware from './middleware';
import persistConfig from './persistConfig';
import type { AuthReducer } from './auth/auth-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer<AuthReducer, AnyAction>(persistConfig, authReducer),
    other: otherReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
