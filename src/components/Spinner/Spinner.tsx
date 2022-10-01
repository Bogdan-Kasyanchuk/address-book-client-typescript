import { FC } from 'react';
import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';
import { accentColor } from '../../styles/variables';

const Spinner: FC = () => {
  return (
    <Div>
      <Oval
        height={50}
        width={50}
        color={accentColor}
        ariaLabel="oval-loading"
        secondaryColor={accentColor}
      />
    </Div>
  );
};

export default Spinner;

const Div = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  z-index: 1000;
  transform: translate(-50%, 0px);
`;