import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import Link from '../Link/Link';
import { size } from '../../styles/variables';

const Navigation: FC = () => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return (
    <Ul>
      <Li>
        <Link to="/" end iconName="home">
          Home
        </Link>
      </Li>
      {isLoggedIn && (
        <Li>
          <Link to="/contacts" iconName="contacts">
            Contacts
          </Link>
        </Li>
      )}
    </Ul>
  );
};

export default Navigation;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-basis: calc(100% / 3);

  ${size.laptopMin} {
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

const Li = styled.li`
  :first-child {
    margin-right: 15px;

    ${size.tabletMin} {
      margin-right: 20px;
    }
  }
`;
