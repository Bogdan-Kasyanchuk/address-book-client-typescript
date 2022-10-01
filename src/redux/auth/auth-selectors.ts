import type { RootState } from '../store';

export const getIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;
export const getUserName = (state: RootState): string | null =>
  state.auth.user.name;
export const getUserAvatarUrl = (state: RootState): string | null =>
  state.auth.user.avatarUrl;
export const getToken = (state: RootState): string | null => state.auth.token;
export const getIsFetchingCurrentUser = (state: RootState): boolean =>
  state.auth.isFetchingCurrentUser;
