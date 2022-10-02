import type { RootState } from './store';

export const getLoading = (state: RootState): boolean => state.other.loading;
