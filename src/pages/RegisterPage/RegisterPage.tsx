import { FC } from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Register from '../../components/Register/Register';

const RegisterPage: FC = () => {
  return (
    <Section>
      <Container>
        <Register />
      </Container>
    </Section>
  );
};

export default RegisterPage;
