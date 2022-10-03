export interface IUser {
  name: null | string;
  email: null | string;
  avatarUrl: null | string;
  password?: string;
  fileAvatar?: null | File;
}
