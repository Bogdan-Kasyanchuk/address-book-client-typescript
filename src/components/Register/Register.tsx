import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { registerUser } from '../../redux/auth/auth-operations';
import Form from '../Form/Form';
import ButtonText from '../ButtonText/ButtonText';
import InputStandartForm from '../InputStandartForm/InputStandartForm';
import validation from '../../service/validationService';
import { TITLE_FORM } from '../../helpers/constants';
import { IUserRegister } from '../../interfaces';

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserRegister>({ mode: 'onBlur' });

  const buttonDisabled: boolean =
    watch('name') === '' ||
    watch('email') === '' ||
    watch('password') === '' ||
    watch('name') === undefined ||
    watch('email') === undefined ||
    watch('password') === undefined;

  const userRegister: SubmitHandler<IUserRegister> = credentials => {
    dispatch(registerUser(credentials));
  };

  return (
    <Form autoComplete="off" formHundler={handleSubmit(userRegister)}>
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
        Register
      </ButtonText>
    </Form>
  );
};

export default Register;
