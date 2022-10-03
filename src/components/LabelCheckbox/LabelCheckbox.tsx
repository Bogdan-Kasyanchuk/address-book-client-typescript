import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const LabelCheckbox: FC<{ children: ReactNode }> = ({ children }) => {
  return <Label>{children}</Label>;
};

export default LabelCheckbox;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
`;
