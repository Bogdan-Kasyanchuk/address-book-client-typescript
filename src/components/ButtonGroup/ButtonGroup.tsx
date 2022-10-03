import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const ButtonGroup: FC<{ children: ReactNode }> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default ButtonGroup;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
