import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { accentColor } from '../../styles/variables';

const SubTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <H2>{children}</H2>;
};

export default SubTitle;

const H2 = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${accentColor};
  text-align: center;
  text-transform: uppercase;
`;
