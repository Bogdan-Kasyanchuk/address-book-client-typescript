import { FC } from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Home from '../../components/Home/Home';

const HomePage: FC = () => {
  return (
    <Section>
      <Container>
        <Home />
      </Container>
    </Section>
  );
};

export default HomePage;
