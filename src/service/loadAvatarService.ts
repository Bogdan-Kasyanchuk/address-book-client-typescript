import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const loadAvatarService = (
  event: ChangeEvent<HTMLInputElement>,
  setFileAvatar: Dispatch<SetStateAction<null | File>>,
  setImagePreview: Dispatch<SetStateAction<string | ArrayBuffer | null>>,
): void => {
  let file: File = (event.target as HTMLInputElement).files![0];
  let reader: FileReader = new FileReader();
  setFileAvatar(file);
  reader.onload = (): void => {
    setImagePreview(reader.result);
  };
  reader.readAsDataURL(file);
};

export default loadAvatarService;
