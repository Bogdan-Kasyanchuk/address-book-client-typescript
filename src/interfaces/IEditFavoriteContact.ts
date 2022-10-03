import { IContact } from './';

export interface IEditFavoriteContact {
  favorite: IContact['favorite'];
  _id: IContact['_id'];
}
