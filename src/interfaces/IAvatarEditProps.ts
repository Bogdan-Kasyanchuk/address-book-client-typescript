import { MouseEventHandler, ChangeEventHandler } from 'react';

export interface IAvatarEditProps {
  imagePreview: string | ArrayBuffer | null;
  userAvatar: string;
  deleteAvatar: MouseEventHandler<HTMLButtonElement>;
  loadAvatar: ChangeEventHandler<HTMLInputElement>;
}
