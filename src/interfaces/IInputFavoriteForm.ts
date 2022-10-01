import { UseFormRegister } from 'react-hook-form';
import { IContact } from './';

export interface IInputFavoriteForm {
  register: UseFormRegister<IContact>;
  name: 'Favorite';
}
