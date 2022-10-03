import { FC } from 'react';
import styled from 'styled-components';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useAppSelector } from '../../hooks/useAppSelector';
import Link from '../Link/Link';
import { size } from '../../styles/variables';

const Navigation: FC = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <List>
      <Item>
        <Link to="/" end iconName="home">
          Home
        </Link>
      </Item>
      {isLoggedIn && (
        <Item>
          <Link to="/contacts" iconName="contacts">
            Contacts
          </Link>
        </Item>
      )}
    </List>
  );
};

export default Navigation;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-basis: calc(100% / 3);

  ${size.laptopMin} {
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

const Item = styled.li`
  :first-child {
    margin-right: 15px;

    ${size.tabletMin} {
      margin-right: 20px;
    }
  }
`;
