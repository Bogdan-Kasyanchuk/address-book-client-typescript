import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { size } from '../../styles/variables';

const Section: FC<{ children: ReactNode }> = ({ children }) => {
  return <SectionTag>{children}</SectionTag>;
};

export default Section;

const SectionTag = styled.section`
  padding-top: 76px;
  padding-bottom: 20px;

  ${size.tabletMin} {
    padding-top: 86px;
  }

  ${size.laptopMin} {
    padding-top: 102px;
  }
`;
