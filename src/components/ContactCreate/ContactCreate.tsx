import { FC, useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SubTitle from '../SubTitle/SubTitle';
import Form from '../Form/Form';
import LabelInput from '../LabelInput/LabelInput';
import InputStandart from '../InputStandart/InputStandart';
import ErrorForm from '../ErrorForm/ErrorForm';
import TextArea from '../TextArea/TextArea';
import LabelCheckbox from '../LabelCheckbox/LabelCheckbox';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { existContactCreate } from '../../service/existContactService';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { accentColor, bgColor } from '../../styles/variables';
import { IContact } from '../../interfaces';

type TContactCreate =
  | 'name'
  | 'phone'
  | 'email'
  | 'address'
  | 'other'
  | 'favorite';

const ContactCreate: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(getContacts);
  const [check, setCheck] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Pick<IContact, TContactCreate>>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    watch('name') === '' ||
    watch('phone') === '' ||
    watch('email') === '' ||
    watch('name') === undefined ||
    watch('phone') === undefined ||
    watch('email') === undefined;

  const createContact: SubmitHandler<Pick<IContact, TContactCreate>> = (
    contact,
  ): void => {
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

  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  return (
    <>
      <Button text buttonHundler={openModal}>
        Add contact
      </Button>
      {isOpenModal && (
        <Modal modalHundler={closeModal}>
          <SubTitle>Creating contact</SubTitle>
          <Form autoComplete="off" formHundler={handleSubmit(createContact)}>
            <LabelInput>
              Name
              <InputStandart
                name="name"
                type="text"
                register={register}
                validation={validation.name}
                placeholder="Enter name"
                title={TITLE_FORM.NAME}
              />
              {errors.name && <ErrorForm errors={errors} name="name" />}
            </LabelInput>
            <LabelInput>
              Phone
              <InputStandart
                name="phone"
                type="tel"
                register={register}
                validation={validation.phone}
                placeholder="Enter phone"
                title={TITLE_FORM.PHONE}
              />
              {errors.phone && <ErrorForm errors={errors} name="phone" />}
            </LabelInput>
            <LabelInput>
              Email
              <InputStandart
                name="email"
                type="text"
                register={register}
                validation={validation.email}
                placeholder="Enter email"
                title={TITLE_FORM.EMAIL}
              />
              {errors.email && <ErrorForm errors={errors} name="email" />}
            </LabelInput>
            <LabelInput>
              Address
              <InputStandart
                name="address"
                type="text"
                register={register}
                placeholder="Enter address"
                title={TITLE_FORM.ADDRES}
              />
            </LabelInput>
            <LabelInput>
              Other
              <TextArea
                name="other"
                register={register}
                placeholder="Enter other"
                title={TITLE_FORM.OTHER}
              />
            </LabelInput>
            <LabelCheckbox>
              Favorite
              <CheckedBorder>
                <InputCheckbox
                  name="favorite"
                  register={register}
                  inputCheckHandler={checkHandler}
                />
                <CheckedCenter checkedType={check}></CheckedCenter>
              </CheckedBorder>
            </LabelCheckbox>
            <ButtonGroup>
              <Button text type="submit" disabled={buttonDisabled}>
                Ok
              </Button>
              <Button text buttonHundler={closeModal}>
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ContactCreate;

const CheckedBorder = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid ${accentColor};
  border-radius: 50%;
`;

const CheckedCenter = styled.span<{ checkedType: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ checkedType }) =>
    checkedType ? accentColor : bgColor};
`;
