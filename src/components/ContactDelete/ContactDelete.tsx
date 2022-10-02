import { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { filterContact } from '../../redux/contacts/contacts-action';
import Modal from '../Modal/Modal';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ButtonText from '../ButtonText/ButtonText';
import { accentColor } from '../../styles/variables';
import { IContactDeleteProps } from '../../interfaces';

const ContactDelete: FC<IContactDeleteProps> = ({
  id,
  name,
  closeModalDelete,
}) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getFilter);

  const contactDelete = (): void => {
    dispatch(deleteContact(id));
    if (filter) dispatch(filterContact(''));
    closeModalDelete();
  };

  return (
    <Modal modalHundler={closeModalDelete}>
      <Text>Are you sure you want to delete contact "{name}"?</Text>
      <ButtonGroup>
        <ButtonText type="button" buttonHundler={contactDelete}>
          Ok
        </ButtonText>
        <ButtonText type="button" buttonHundler={closeModalDelete}>
          Cancel
        </ButtonText>
      </ButtonGroup>
    </Modal>
  );
};

export default ContactDelete;

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${accentColor};
  line-height: 1.3;
`;
