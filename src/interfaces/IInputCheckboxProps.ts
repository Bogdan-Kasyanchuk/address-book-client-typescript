import { ChangeEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IContact } from './';

export interface IInputCheckboxProps {
  register?: UseFormRegister<IContact>;
  name?: 'Favorite';
  favorite?: boolean;
  inputCheckHandler: ChangeEventHandler<HTMLInputElement>;
}
