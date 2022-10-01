import { UseFormRegister } from 'react-hook-form';
import { IContact } from './';

export interface ITextAreaProps {
  name: 'Other';
  defaultValue?: string;
  register: UseFormRegister<IContact>;
  placeholder: string;
  title: string;
}
