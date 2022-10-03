import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useAppSelector } from '../../hooks/useAppSelector';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { size, accentColor } from '../../styles/variables';

const AppBar: FC = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <HeaderWrapper>
      <Header>
        <Navigation />
        <Link to="/">
          <Logo children="Addres book" />
        </Link>
        <Box> {isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Header>
    </HeaderWrapper>
  );
};

export default AppBar;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 2px solid ${accentColor};
  background-color: #282828;
  z-index: 2000;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 10px;

  ${size.tabletMin} {
    padding: 15px 15px;
  }

  ${size.laptopMin} {
    padding: 20px 20px;
  }
`;

const Box = styled.div`
  flex-basis: calc(100% / 3);
`;
