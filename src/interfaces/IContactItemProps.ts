import { IContact } from './';

export interface IContactItemProps {
  element: Pick<IContact, 'avatarUrl' | 'favorite' | '_id' | 'name'>;
}
