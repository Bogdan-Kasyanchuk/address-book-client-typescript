import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerUser } from '../../redux/auth/auth-operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Form from '../Form/Form';
import LabelInput from '../LabelInput/LabelInput';
import InputStandart from '../InputStandart/InputStandart';
import ErrorForm from '../ErrorForm/ErrorForm';
import Button from '../Button/Button';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IUser } from '../../interfaces';

type TRegister = 'avatarUrl' | 'fileAvatar';

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Omit<IUser, TRegister>>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    watch('name') === '' ||
    watch('email') === '' ||
    watch('password') === '' ||
    watch('name') === undefined ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const userRegister: SubmitHandler<Omit<IUser, TRegister>> = credentials => {
    dispatch(registerUser(credentials));
  };

  return (
    <Form autoComplete="off" formHundler={handleSubmit(userRegister)}>
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
        Email
        <InputStandart
          name="email"
          type="email"
          register={register}
          validation={validation.email}
          placeholder="Enter email"
          title={TITLE_FORM.EMAIL}
        />
        {errors.email && <ErrorForm errors={errors} name="email" />}
      </LabelInput>
      <LabelInput>
        Password
        <InputStandart
          name="password"
          type="password"
          register={register}
          validation={validation.password}
          placeholder="Enter password"
          title={TITLE_FORM.PASSWORD}
        />
        {errors.password && <ErrorForm errors={errors} name="password" />}
      </LabelInput>
      <Button text marginAuto type="submit" disabled={buttonDisabled}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
