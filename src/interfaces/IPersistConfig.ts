import { WebStorage } from 'redux-persist';

export interface IPersistConfig {
  key: string;
  storage: WebStorage;
  whitelist: string[];
}
