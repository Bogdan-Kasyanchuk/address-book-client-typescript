import { FC } from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../../styles/utils';
import { IInputCheckboxProps } from '../../interfaces';

const InputCheckbox: FC<IInputCheckboxProps> = ({
  register,
  name,
  favorite,
  inputCheckHandler,
}) => {
  return (
    <Input
      type="checkbox"
      {...(register && {
        ...register(name?.toLowerCase() as 'favorite'),
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
