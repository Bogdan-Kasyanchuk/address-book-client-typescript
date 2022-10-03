import { ChangeEventHandler } from 'react';

export interface IInputCheckboxProps {
  name?: 'favorite';
  register?: any;
  inputCheckHandler: ChangeEventHandler<HTMLInputElement>;
  favorite?: boolean;
}
