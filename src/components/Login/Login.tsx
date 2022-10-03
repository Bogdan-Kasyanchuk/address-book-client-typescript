import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { logInUser } from '../../redux/auth/auth-operations';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Form from '../Form/Form';
import LabelInput from '../LabelInput/LabelInput';
import InputStandart from '../InputStandart/InputStandart';
import ErrorForm from '../ErrorForm/ErrorForm';
import Button from '../Button/Button';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IUser } from '../../interfaces';

type TLogin = 'email' | 'password';

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Pick<IUser, TLogin>>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    watch('email') === '' ||
    watch('password') === '' ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const userlogIn: SubmitHandler<Pick<IUser, TLogin>> = (credentials): void => {
    dispatch(logInUser(credentials));
  };

  return (
    <Form autoComplete="off" formHundler={handleSubmit(userlogIn)}>
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
        LogIn
      </Button>
    </Form>
  );
};

export default Login;
