import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { editFavoriteContact } from '../../redux/contacts/contacts-operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import { accentColor } from '../../styles/variables';
import { IEditFavoriteContact } from '../../interfaces';

const ContactFavoriteEdit: FC<IEditFavoriteContact> = ({ favorite, _id }) => {
  const dispatch = useAppDispatch();
  const favoriteContactEdit = (e: ChangeEvent<HTMLInputElement>) => {
    const editedFavoriteContact = {
      _id,
      favorite: e.target.checked,
    };
    dispatch(editFavoriteContact(editedFavoriteContact));
  };

  return (
    <Label>
      <InputCheckbox
        favorite={favorite}
        inputCheckHandler={favoriteContactEdit}
      />
      <CheckedCenter checkedType={favorite}></CheckedCenter>
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

const CheckedCenter = styled.span<{ checkedType: boolean | null }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ checkedType }) => (checkedType ? accentColor : null)};
`;
