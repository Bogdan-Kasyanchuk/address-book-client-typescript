import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import ButtonIconText from '../ButtonIconText/ButtonIconText';
import Modal from '../Modal/Modal';
import SubTitle from '../SubTitle/SubTitle';
import Form from '../Form/Form';
import InputStandartForm from '../InputStandartForm/InputStandartForm';
import TextAreaForm from '../TextAreaForm/TextAreaForm';
import InputFavoriteForm from '../InputFavoriteForm/InputFavoriteForm';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ButtonText from '../ButtonText/ButtonText';
import { existContactCreate } from '../../service/existContactService';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IContact } from '../../interfaces';

const ContactCreate: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(getContacts);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IContact>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    watch('name') === '' ||
    watch('phone') === '' ||
    watch('email') === '' ||
    watch('name') === undefined ||
    watch('phone') === undefined ||
    watch('email') === undefined;

  const createContact: SubmitHandler<IContact> = (contact): void => {
    if (existContactCreate(contacts, contact)) {
      return;
    }
    dispatch(addContact(contact));
    reset();
    closeModal();
  };

  const openModal = (): void => {
    setIsOpenModal(true);
  };

  const closeModal = (): void => {
    reset();
    setIsOpenModal(false);
  };

  return (
    <>
      <ButtonIconText type="button" buttonHundler={openModal} iconName="add">
        Add contact
      </ButtonIconText>
      {isOpenModal && (
        <Modal modalHundler={closeModal}>
          <SubTitle>Creating contact</SubTitle>
          <Form autoComplete="off" formHundler={handleSubmit(createContact)}>
            <InputStandartForm
              name="Name"
              type="text"
              register={register}
              validation={validation.name}
              placeholder="Enter name"
              title={TITLE_FORM.NAME}
              errors={errors}
            />
            <InputStandartForm
              name="Phone"
              type="tel"
              register={register}
              validation={validation.phone}
              placeholder="Enter phone"
              title={TITLE_FORM.PHONE}
              errors={errors}
            />
            <InputStandartForm
              name="Email"
              type="text"
              register={register}
              validation={validation.email}
              placeholder="Enter email"
              title={TITLE_FORM.EMAIL}
              errors={errors}
            />
            <InputStandartForm
              name="Address"
              type="text"
              register={register}
              placeholder="Enter address"
              title={TITLE_FORM.ADDRES}
            />
            <TextAreaForm
              name="Other"
              register={register}
              placeholder="Enter other"
              title={TITLE_FORM.OTHER}
            />
            <InputFavoriteForm name="Favorite" register={register} />
            <ButtonGroup>
              <ButtonText disabled={buttonDisabled} type="submit">
                Ok
              </ButtonText>
              <ButtonText type="button" buttonHundler={closeModal}>
                Cancel
              </ButtonText>
            </ButtonGroup>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ContactCreate;
