import { FC, useState, ChangeEvent, MouseEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getUserName } from '../../redux/auth/auth-selectors';
import { deleteAvatarUser, updateUser } from '../../redux/auth/auth-operations';
import Modal from '../Modal/Modal';
import SubTitle from '../SubTitle/SubTitle';
import AvatarEdit from '../AvatarEdit/AvatarEdit';
import Form from '../Form/Form';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ButtonText from '../ButtonText/ButtonText';
import InputStandartForm from '../InputStandartForm/InputStandartForm';
import loadAvatarService from '../../service/loadAvatarService';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IUserUpdate, IUserEditProps } from '../../interfaces';

const UserEdit: FC<IUserEditProps> = ({ userAvatar, closeModalEdit }) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(getUserName);
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
  } = useForm<IUserUpdate>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    (watch('name') !== userName && watch('name') !== undefined) ||
    fileAvatar !== null;

  const loadAvatar = (event: ChangeEvent<HTMLInputElement>): void => {
    loadAvatarService(event, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    setImagePreview(null);
    setFileAvatar(null);
    dispatch(deleteAvatarUser());
  };

  const editUser: SubmitHandler<IUserUpdate> = ({ name }): void => {
    dispatch(updateUser({ fileAvatar, name }));
    closeModalEdit();
  };

  const closeModal = (): void => {
    setImagePreview(null);
    setFileAvatar(null);
    resetField('name');
    closeModalEdit();
  };

  return (
    <Modal modalHundler={closeModal}>
      <SubTitle>Editing user</SubTitle>
      <AvatarEdit
        imagePreview={imagePreview}
        userAvatar={userAvatar}
        deleteAvatar={deleteAvatar}
        loadAvatar={loadAvatar}
      ></AvatarEdit>
      <Form autoComplete="off" formHundler={handleSubmit(editUser)}>
        <InputStandartForm
          name="Name"
          type="text"
          defaultValue={userName as string}
          register={register}
          validation={validation.name}
          placeholder="Enter name"
          title={TITLE_FORM.NAME}
          errors={errors}
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

export default UserEdit;
