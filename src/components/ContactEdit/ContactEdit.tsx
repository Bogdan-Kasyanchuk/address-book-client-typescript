import { useState, FC, ChangeEvent, MouseEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  deleteAvatarContact,
  updateContact,
} from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import Modal from '../Modal/Modal';
import SubTitle from '../SubTitle/SubTitle';
import AvatarEdit from '../AvatarEdit/AvatarEdit';
import Form from '../Form/Form';
import InputStandartForm from '../InputStandartForm/InputStandartForm';
import TextAreaForm from '../TextAreaForm/TextAreaForm';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ButtonText from '../ButtonText/ButtonText';
import { existContactUpdate } from '../../service/existContactService';
import loadAvatarService from '../../service/loadAvatarService';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IContactEditProps, IContact } from '../../interfaces';

const ContactEdit: FC<IContactEditProps> = ({
  element,
  userAvatar,
  closeModalEdit,
}) => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(getContacts);
  const [fileAvatar, setFileAvatar] = useState<null | File>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<IContact>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    (watch('name') !== element.name && watch('name') !== undefined) ||
    (watch('phone') !== element.phone && watch('phone') !== undefined) ||
    (watch('email') !== element.email && watch('email') !== undefined) ||
    (watch('address') !== element.address && watch('address') !== undefined) ||
    (watch('other') !== element.other && watch('other') !== undefined) ||
    fileAvatar !== null;

  const loadAvatar = (event: ChangeEvent<HTMLInputElement>): void => {
    loadAvatarService(event, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    setImagePreview(null);
    setFileAvatar(null);
    dispatch(deleteAvatarContact(element._id));
  };

  const editContact: SubmitHandler<IContact> = ({
    name,
    phone,
    email,
    address,
    other,
  }): void => {
    if (existContactUpdate(element, contacts, { name, phone, email })) {
      return;
    }
    dispatch(
      updateContact({
        _id: element._id,
        name,
        phone,
        email,
        address,
        other,
        fileAvatar,
      }),
    );
    closeModalEdit();
  };

  const closeModal = (): void => {
    setImagePreview(null);
    setFileAvatar(null);
    resetField('_id');
    resetField('name');
    resetField('phone');
    resetField('email');
    resetField('address');
    resetField('other');
    closeModalEdit();
  };

  return (
    <Modal modalHundler={closeModal}>
      <SubTitle>Editing contact</SubTitle>
      <AvatarEdit
        imagePreview={imagePreview}
        userAvatar={userAvatar}
        deleteAvatar={deleteAvatar}
        loadAvatar={loadAvatar}
      ></AvatarEdit>
      <Form autoComplete="off" formHundler={handleSubmit(editContact)}>
        <InputStandartForm
          name="Name"
          type="text"
          defaultValue={element.name}
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
        />
        <InputStandartForm
          name="Phone"
          type="tel"
          defaultValue={element.phone}
          register={register}
          validation={validation.phone}
          placeholder="Enter phone"
          title={TITLE_FORM.PHONE}
          errors={errors}
        />
        <InputStandartForm
          name="Email"
          type="text"
          defaultValue={element.email}
          register={register}
          validation={validation.email}
          placeholder="Enter email"
          title={TITLE_FORM.EMAIL}
          errors={errors}
        />
        <InputStandartForm
          name="Address"
          type="text"
          defaultValue={element.address}
          register={register}
          placeholder="Enter address"
          title={TITLE_FORM.ADDRES}
        />
        <TextAreaForm
          name="Other"
          defaultValue={element.other}
          register={register}
          placeholder="Enter other"
          title={TITLE_FORM.OTHER}
        />
        <ButtonGroup>
          <ButtonText disabled={!buttonDisabled} type="submit">
            Ok
          </ButtonText>
          <ButtonText type="button" buttonHundler={closeModal}>
            Cancel
          </ButtonText>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

export default ContactEdit;
