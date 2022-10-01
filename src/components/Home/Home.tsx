import { FC } from 'react';
import styled from 'styled-components';
import addressBook from '../../assets/img/addressBook.png';
import { size } from '../../styles/variables';

const Home: FC = () => {
  return (
    <>
      <Div>
        <P1>Welcome!</P1>
        <P2>This is your Addres book</P2>
      </Div>
      <Img src={addressBook} alt="Address book" />
    </>
  );
};

export default Home;

const Div = styled.div`
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;

  ${size.laptopMin} {
    margin-bottom: 40px;
    padding-top: 20px;
  }
`;

const P1 = styled.p`
  margin-bottom: 20px;
  font-size: 40px;

  ${size['450Min']} {
    font-size: 60px;
  }

  ${size.tabletMin} {
    font-size: 80px;
  }

  ${size.laptopMin} {
    font-size: 100px;
  }
`;

const P2 = styled.p`
  font-size: 20px;

  ${size['450Min']} {
    font-size: 30px;
  }

  ${size.tabletMin} {
    font-size: 40px;
  }

  ${size.laptopMin} {
    font-size: 60px;
  }
`;

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 400px;

  ${size.tabletMin} {
    width: 512px;
  }
`;
