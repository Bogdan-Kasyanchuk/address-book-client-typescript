export interface IContactEditProps {
  element: {
    name: string;
    phone: string;
    email: string;
    address: string;
    other: string;
    _id: string;
  };
  userAvatar: string;
  closeModalEdit: () => void;
}
