import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logInUser } from '../../redux/auth/auth-operations';
import ButtonText from '../ButtonText/ButtonText';
import Form from '../Form/Form';
import InputStandartForm from '../InputStandartForm/InputStandartForm';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IUserLogIn } from '../../interfaces';

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserLogIn>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    watch('email') === '' ||
    watch('password') === '' ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const userlogIn: SubmitHandler<IUserLogIn> = (credentials): void => {
    dispatch(logInUser(credentials));
  };

  return (
    <Form autoComplete="off" formHundler={handleSubmit(userlogIn)}>
      <InputStandartForm
        name="Email"
        type="email"
        register={register}
        validation={validation.email}
        placeholder="Enter email"
        title={TITLE_FORM.EMAIL}
        errors={errors}
      />
      <InputStandartForm
        name="Password"
        type="password"
        register={register}
        validation={validation.password}
        placeholder="Enter password"
        title={TITLE_FORM.PASSWORD}
        errors={errors}
      />
      <ButtonText disabled={buttonDisabled} type="submit">
        LogIn
      </ButtonText>
    </Form>
  );
};

export default Login;
