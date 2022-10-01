import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonGroup: FC<{ children: ReactNode }> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default ButtonGroup;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
