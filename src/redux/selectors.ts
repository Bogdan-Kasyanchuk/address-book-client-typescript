import type { RootState } from './store';

export const getLoading = (state: RootState): boolean => state.loading;
