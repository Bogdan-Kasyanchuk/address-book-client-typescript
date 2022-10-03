import type { RootState } from '../store';

export const getIsLoggedIn = (
  state: RootState,
): RootState['auth']['isLoggedIn'] => state.auth.isLoggedIn;
export const getUserName = (
  state: RootState,
): RootState['auth']['user']['name'] => state.auth.user.name;
export const getUserAvatarUrl = (
  state: RootState,
): RootState['auth']['user']['avatarUrl'] => state.auth.user.avatarUrl;
export const getToken = (state: RootState): RootState['auth']['token'] =>
  state.auth.token;
export const getIsFetchingCurrentUser = (
  state: RootState,
): RootState['auth']['isFetchingCurrentUser'] =>
  state.auth.isFetchingCurrentUser;
