import { FC, useState, ChangeEvent, MouseEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { getUserName } from '../../redux/auth/auth-selectors';
import { deleteAvatarUser, updateUser } from '../../redux/auth/auth-operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import Modal from '../Modal/Modal';
import SubTitle from '../SubTitle/SubTitle';
import AvatarEdit from '../AvatarEdit/AvatarEdit';
import Form from '../Form/Form';
import LabelInput from '../LabelInput/LabelInput';
import InputStandart from '../InputStandart/InputStandart';
import ErrorForm from '../ErrorForm/ErrorForm';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import loadAvatarService from '../../service/loadAvatarService';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IUser, IUserEditProps } from '../../interfaces';

type TUserEdit = 'name' | 'fileAvatar';

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
  } = useForm<Pick<IUser, TUserEdit>>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    (watch('name') !== userName && watch('name') !== undefined) ||
    fileAvatar !== null;

  const loadAvatar = (e: ChangeEvent<HTMLInputElement>): void => {
    loadAvatarService(e, setFileAvatar, setImagePreview);
  };

  const deleteAvatar = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setImagePreview(null);
    setFileAvatar(null);
    dispatch(deleteAvatarUser());
  };

  const editUser: SubmitHandler<Pick<IUser, TUserEdit>> = ({ name }): void => {
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
        <LabelInput>
          Name
          <InputStandart
            name="name"
            type="text"
            defaultValue={userName as string}
            register={register}
            validation={validation.name}
            placeholder="Enter name"
            title={TITLE_FORM.NAME}
          />
          {errors.name && <ErrorForm errors={errors} name="name" />}
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

export default UserEdit;
