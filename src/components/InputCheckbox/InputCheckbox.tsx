import { FC } from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../../styles/utils';
import { IInputCheckboxProps } from '../../interfaces';

const InputCheckbox: FC<IInputCheckboxProps> = ({
  name,
  register,
  inputCheckHandler,
  favorite,
}) => {
  return (
    <Input
      type="checkbox"
      {...(register && {
        ...register(name),
      })}
      checked={favorite}
      onChange={inputCheckHandler}
    />
  );
};

export default InputCheckbox;

const Input = styled.input`
  ${visuallyHidden as any}
`;
