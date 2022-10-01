// import { UseFormRegister } from 'react-hook-form';
import {
  // IContact,
  IValidationItem,
  // IUserUpdate,
  //  IUserLogIn
} from './';

export interface IInputStandartProps {
  type: string;
  defaultValue?: string;
  // register:
  //   | UseFormRegister<IContact>
  //   | UseFormRegister<IUserUpdate>
  //   | UseFormRegister<IUserLogIn>;
  register: any;
  name: 'name' | 'address' | 'email' | 'phone' | 'password';
  validation?: IValidationItem;
  placeholder: string;
  title: string;
}
