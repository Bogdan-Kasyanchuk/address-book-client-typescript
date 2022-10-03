import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { size, accentColor } from '../../styles/variables';

const Logo: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box>
      <Icon iconName="logo" width="34px" height="34px" />
      <Text>{children}</Text>
    </Box>
  );
};

export default Logo;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 3);
  color: ${accentColor};

  .icon {
    stroke: currentColor;
  }
`;

const Text = styled.h1`
  margin-left: 10px;
  line-height: 1.06;
  text-transform: uppercase;

  ${size.mobileMax} {
    display: none;
  }

  ${size.laptopMax} {
    width: 60px;
  }

  ${size.desktopMin} {
    font-size: 34px;
    line-height: 1;
  }
`;
