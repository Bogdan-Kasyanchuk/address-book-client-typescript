export interface IContact {
  address: string;
  avatarUrl: string;
  createdAt: string;
  email: string;
  favorite: boolean;
  name: string;
  other: string;
  owner:
    | {
        _id: string;
        name: string;
        email: string;
      }
    | string;
  phone: string;
  updatedAt: string;
  _id: string;
}
