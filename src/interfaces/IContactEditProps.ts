import { IContact } from './';

export interface IContactEditProps {
  element: Pick<
    IContact,
    'name' | 'phone' | 'email' | 'address' | 'other' | '_id'
  >;
  userAvatar: string;
  closeModalEdit: () => void;
}
