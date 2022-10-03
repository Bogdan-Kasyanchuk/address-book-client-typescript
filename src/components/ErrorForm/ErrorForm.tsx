import { FC } from 'react';
import styled from 'styled-components';
import { errorColor } from '../../styles/variables';
import { IErrorFormProps } from '../../interfaces';

const ErrorForm: FC<IErrorFormProps> = ({ errors, name }) => {
  return <Text>{errors?.[name].message}</Text>;
};

export default ErrorForm;

const Text = styled.p`
  position: absolute;
  top: 65px;
  font-size: 12px;
  color: ${errorColor};
`;
