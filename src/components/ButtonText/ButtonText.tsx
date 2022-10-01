import { FC } from 'react';
import styled from 'styled-components';
import { IButtonTextProps } from '../../interfaces';

const ButtonText: FC<IButtonTextProps> = ({
  disabled,
  type,
  buttonHundler,
  children,
}) => {
  return (
    <Button disabled={disabled} type={type} onClick={buttonHundler}>
      {children}
    </Button>
  );
};

export default ButtonText;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
