import { IContact } from './';

export interface IContactDeleteProps {
  _id: IContact['_id'];
  name: IContact['name'];
  closeModalDelete: () => void;
}
