import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { accentColor } from '../../styles/variables';

const SubTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default SubTitle;

const Text = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: ${accentColor};
  text-align: center;
  text-transform: uppercase;
`;
