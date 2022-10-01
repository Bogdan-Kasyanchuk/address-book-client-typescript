import storage from 'redux-persist/es/storage';
import { IPersistConfig } from '../interfaces';

const persistConfig: IPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export default persistConfig;
