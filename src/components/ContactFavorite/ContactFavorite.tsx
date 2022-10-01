import { useEffect, FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getContact } from '../../redux/contacts/contacts-operations';
import ButtonIconText from '../ButtonIconText/ButtonIconText';
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
    <ButtonIconText
      type="button"
      buttonHundler={favoriteContacts}
      iconName="favorite"
    >
      Favorite
    </ButtonIconText>
  );
};

export default ContactFavorite;
