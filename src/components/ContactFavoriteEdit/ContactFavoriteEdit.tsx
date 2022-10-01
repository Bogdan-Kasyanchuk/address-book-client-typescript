import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { editFavoriteContact } from '../../redux/contacts/contacts-operations';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import { accentColor } from '../../styles/variables';
import { IContactFavoriteEditProps } from '../../interfaces';

const ContactFavoriteEdit: FC<IContactFavoriteEditProps> = ({
  favorite,
  id,
}) => {
  const dispatch = useAppDispatch();
  const favoriteContactEdit = (event: ChangeEvent<HTMLInputElement>) => {
    const editedFavoriteContact = {
      id,
      favorite: event.target.checked,
    };
    dispatch(editFavoriteContact(editedFavoriteContact));
  };

  return (
    <Label>
      <InputCheckbox
        favorite={favorite}
        inputCheckHandler={favoriteContactEdit}
      />
      <Span checkedType={favorite}></Span>
    </Label>
  );
};

export default ContactFavoriteEdit;

const Label = styled.label`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid ${accentColor};
  border-radius: 50%;
`;

const Span = styled.span<{ checkedType: boolean | null }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ checkedType }) => (checkedType ? accentColor : null)};
`;
