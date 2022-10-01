import { UseFormRegister } from 'react-hook-form';
import {
  IContact,
  IValidationItem,
  IUserUpdate,
  IUserLogIn,
  IUserRegister,
} from './';

export interface IInputStandartFormProps {
  name: 'Name' | 'Address' | 'Email' | 'Phone' | 'Password';
  type: string;
  defaultValue?: string;
  register:
    | UseFormRegister<IContact>
    | UseFormRegister<IUserUpdate>
    | UseFormRegister<IUserLogIn>
    | UseFormRegister<IUserRegister>;
  validation?: IValidationItem;
  placeholder: string;
  title: string;
  errors?: any;
}
