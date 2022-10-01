import { configureStore, AnyAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from './contacts/contacts-reducers';
import { authReducer } from './auth/auth-reducers';
import { loadingReducer } from './loading-reducer';
import { errorReducer } from './error-reducer';
import middleware from './middleware';
import persistConfig from './persistConfig';
import type { RootReducer } from './auth/auth-reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer<RootReducer, AnyAction>(persistConfig, authReducer),
    loading: loadingReducer,
    error: errorReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
