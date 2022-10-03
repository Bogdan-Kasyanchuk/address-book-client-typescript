import { FC } from 'react';
import styled from 'styled-components';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { filterContact } from '../../redux/contacts/contacts-action';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Modal from '../Modal/Modal';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import { accentColor } from '../../styles/variables';
import { IContactDeleteProps } from '../../interfaces';

const ContactDelete: FC<IContactDeleteProps> = ({
  _id,
  name,
  closeModalDelete,
}) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(getFilter);

  const contactDelete = (): void => {
    dispatch(deleteContact(_id));
    if (filter) dispatch(filterContact(''));
    closeModalDelete();
  };

  return (
    <Modal modalHundler={closeModalDelete}>
      <Text>Are you sure you want to delete contact "{name}"?</Text>
      <ButtonGroup>
        <Button text buttonHundler={contactDelete}>
          Ok
        </Button>
        <Button text buttonHundler={closeModalDelete}>
          Cancel
        </Button>
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
