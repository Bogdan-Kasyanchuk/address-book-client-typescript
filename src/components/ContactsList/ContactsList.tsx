import { FC } from 'react';
import styled from 'styled-components';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { useAppSelector } from '../../hooks/useAppSelector';
import ContactItem from '../ContactItem/ContactItem';
import { size } from '../../styles/variables';

const ContactsList: FC<{ searchParams: string | null }> = ({
  searchParams,
}) => {
  const filteredContacts = useAppSelector(getFilteredContacts);

  return (
    <List>
      {filteredContacts.map(
        element =>
          (searchParams && !element.favorite) || (
            <ContactItem key={element._id} element={element} />
          ),
      )}
    </List>
  );
};

export default ContactsList;

const List = styled.ul`
  margin-left: -20px;
  margin-top: -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  ${size.tabletMin} {
    display: flex;
  }
`;
