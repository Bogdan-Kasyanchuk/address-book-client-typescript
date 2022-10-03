import type { RootState } from './store';

export const getLoading = (state: RootState): RootState['other']['loading'] =>
  state.other.loading;
