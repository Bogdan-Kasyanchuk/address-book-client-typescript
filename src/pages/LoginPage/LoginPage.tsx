import { FC } from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Login from '../../components/Login/Login';

const LoginPage: FC = () => {
  return (
    <Section>
      <Container>
        <Login />
      </Container>
    </Section>
  );
};

export default LoginPage;
