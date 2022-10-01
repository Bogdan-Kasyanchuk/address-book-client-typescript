import { ChangeEventHandler, ForwardedRef } from 'react';

export interface IInputFileProps {
  inputHundler: ChangeEventHandler<HTMLInputElement>;
  ref: ForwardedRef<HTMLInputElement>;
}
