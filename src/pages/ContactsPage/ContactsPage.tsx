import { FC } from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Contacts from '../../components/Contacts/Contacts';

const ContactsPage: FC = () => {
  return (
    <Section>
      <Container>
        <Contacts />
      </Container>
    </Section>
  );
};

export default ContactsPage;
