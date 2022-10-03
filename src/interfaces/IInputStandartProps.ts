import { IValidationItem } from './';

export interface IInputStandartProps {
  name: 'name' | 'address' | 'email' | 'phone' | 'password';
  type: string;
  register: any;
  defaultValue?: string;
  placeholder: string;
  title: string;
  validation?: IValidationItem;
}
