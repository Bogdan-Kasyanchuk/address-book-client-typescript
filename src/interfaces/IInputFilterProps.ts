import { ChangeEventHandler } from 'react';

export interface IInputFilterProps {
  autoComplete: string;
  type: string;
  value: string;
  placeholder: string;
  inputHundler: ChangeEventHandler<HTMLInputElement>;
}
