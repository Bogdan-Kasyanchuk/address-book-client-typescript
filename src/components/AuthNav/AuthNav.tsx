import { FC } from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

const AuthNav: FC = () => {
  return (
    <List>
      <Item>
        <Link to="/register" iconName="register">
          Register
        </Link>
      </Item>
      <Item>
        <Link to="/login" iconName="login">
          Login
        </Link>
      </Item>
    </List>
  );
};

export default AuthNav;

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Item = styled.li`
  :first-child {
    margin-right: 20px;
  }
`;
