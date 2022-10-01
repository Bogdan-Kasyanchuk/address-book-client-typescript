import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  ${size.mobileMax} {
    max-width: 767px;
  }

  ${size.tabletMin} {
    width: 768px;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${size.laptopMin} {
    width: 1024px;
  }

  ${size.desktopMin} {
    width: 1280px;
  }
`;
