import toast from 'react-hot-toast';
import { IContact, IContactEditProps } from '../interfaces';

type TName = 'name' | 'phone' | 'email';

const elementIsEqualAnother = (
  contacts: IContact[],
  name: TName,
  contactElement: string,
): boolean =>
  contacts.some(
    element => element[name].toLowerCase() === contactElement.toLowerCase(),
  );

const elementIsSelfEqual = (
  contact: IContactEditProps['element'],
  name: TName,
  contactElement: string,
): boolean => contact[name].toLowerCase() !== contactElement.toLowerCase();

const existContactCreate = (
  contacts: IContact[],
  { name, phone, email }: Pick<IContact, TName>,
): boolean | undefined => {
  let elementMessage: string = '';

  if (elementIsEqualAnother(contacts, 'name', name)) {
    elementMessage = name;
  } else if (elementIsEqualAnother(contacts, 'phone', phone)) {
    elementMessage = phone;
  } else if (elementIsEqualAnother(contacts, 'email', email)) {
    elementMessage = email;
  } else {
    return;
  }

  toast(`${elementMessage} is already in contacts`, {
    icon: '⚠️',
  });

  return true;
};

const existContactUpdate = (
  contact: IContactEditProps['element'],
  contacts: IContact[],
  { name, phone, email }: Pick<IContact, TName>,
): boolean | undefined => {
  let elementMessage: string = '';

  if (
    elementIsSelfEqual(contact, 'name', name) &&
    elementIsEqualAnother(contacts, 'name', name)
  ) {
    elementMessage = name;
  } else if (
    elementIsSelfEqual(contact, 'phone', phone) &&
    elementIsEqualAnother(contacts, 'phone', phone)
  ) {
    elementMessage = phone;
  } else if (
    elementIsSelfEqual(contact, 'email', email) &&
    elementIsEqualAnother(contacts, 'email', email)
  ) {
    elementMessage = email;
  } else {
    return;
  }

  toast(`${elementMessage} is already in contacts`, {
    icon: '⚠️',
  });

  return true;
};

export { existContactCreate, existContactUpdate };
