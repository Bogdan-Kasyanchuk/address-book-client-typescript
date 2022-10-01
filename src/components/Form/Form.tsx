import { FC } from 'react';
import styled from 'styled-components';
import { IFormProps } from '../../interfaces';

const Form: FC<IFormProps> = ({ autoComplete, formHundler, children }) => {
  return (
    <FormTag autoComplete={autoComplete} onSubmit={formHundler}>
      {children}
    </FormTag>
  );
};

export default Form;

const FormTag = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
`;
