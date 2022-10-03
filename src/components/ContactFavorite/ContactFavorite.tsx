import { useEffect, FC } from 'react';
import { getContact } from '../../redux/contacts/contacts-operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Button from '../Button/Button';
import { IContactFavoriteProps } from '../../interfaces';

const ContactFavorite: FC<IContactFavoriteProps> = ({
  searchParams,
  setSearchParams,
}) => {
  const dispatch = useAppDispatch();

  const favoriteContacts = (): void => {
    if (searchParams.get('favorite')) {
      setSearchParams({});
    } else {
      setSearchParams({ favorite: true });
    }
  };

  useEffect(() => {
    if (searchParams.get('favorite')) {
      dispatch(getContact(searchParams.get('favorite')));
    } else {
      dispatch(getContact(''));
    }
  }, [searchParams, dispatch]);

  return (
    <Button text buttonHundler={favoriteContacts}>
      Favorite
    </Button>
  );
};

export default ContactFavorite;
