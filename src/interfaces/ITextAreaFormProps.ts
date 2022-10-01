import { UseFormRegister } from 'react-hook-form';
import { IContact } from './';

export interface ITextAreaFormProps {
  name: 'Other';
  defaultValue?: string;
  register: UseFormRegister<IContact>;
  placeholder: string;
  title: string;
}
