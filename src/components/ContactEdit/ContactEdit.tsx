import { useState, FC, ChangeEvent, MouseEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  deleteAvatarContact,
  updateContact,
} from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Modal from '../Modal/Modal';
import SubTitle from '../SubTitle/SubTitle';
import AvatarEdit from '../AvatarEdit/AvatarEdit';
import Form from '../Form/Form';
import LabelInput from '../LabelInput/LabelInput';
import InputStandart from '../InputStandart/InputStandart';
import ErrorForm from '../ErrorForm/ErrorForm';
import TextArea from '../TextArea/TextArea';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import { existContactUpdate } from '../../service/existContactService';
import loadAvatarService from '../../service/loadAvatarService';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IContactEditProps, IContact } from '../../interfaces';

type TContactUpdate =
  | '_id'
  | 'name'
  | 'phone'
  | 'email'
  | 'address'
  | 'other'
  | 'fileAvatar';

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
  } = useForm<Pick<IContact, TContactUpdate>>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    (watch('name') !== element.name && watch('name') !== undefined) ||
    (watch('phone') !== element.phone && watch('phone') !== undefined) ||
    (watch('email') !== element.email && watch('email') !== undefined) ||
    (watch('address') !== element.address && watch('address') !== undefined) ||
    (watch('other') !== element.other && watch('other') !== undefined) ||
    fileAvatar !== null;

  const loadAvatar = (e: ChangeEvent<HTMLInputElement>): void => {
    loadAvatarService(e, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setImagePreview(null);
    setFileAvatar(null);
    dispatch(deleteAvatarContact(element._id));
  };

  const editContact: SubmitHandler<Pick<IContact, TContactUpdate>> = ({
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
        <LabelInput>
          Name
          <InputStandart
            name="name"
            type="text"
            defaultValue={element.name}
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
            defaultValue={element.phone}
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
            defaultValue={element.email}
            register={register}
            validation={validation.email}
            placeholder="Enter email"
            title={TITLE_FORM.EMAIL}
          />
          {errors.email && <ErrorForm errors={errors} name="email" />}
        </LabelInput>
        <LabelInput>
          <InputStandart
            name="address"
            type="text"
            defaultValue={element.address}
            register={register}
            placeholder="Enter address"
            title={TITLE_FORM.ADDRES}
          />
        </LabelInput>
        <LabelInput>
          Other
          <TextArea
            name="other"
            defaultValue={element.other}
            register={register}
            placeholder="Enter other"
            title={TITLE_FORM.OTHER}
          />
        </LabelInput>
        <ButtonGroup>
          <Button text type="submit" disabled={!buttonDisabled}>
            Ok
          </Button>
          <Button text buttonHundler={closeModal}>
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

export default ContactEdit;
