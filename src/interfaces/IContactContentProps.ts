import { IContact } from './';

export interface IContactContentProps {
  element: Pick<IContact, 'name' | 'phone' | 'email' | 'address' | 'other'>;
}
