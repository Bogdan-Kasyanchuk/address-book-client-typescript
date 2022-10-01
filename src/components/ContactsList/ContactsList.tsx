import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import styled from 'styled-components';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';
import { size } from '../../styles/variables';

const ContactsList: FC<{ searchParams: string | null }> = ({
  searchParams,
}) => {
  const filteredContacts = useAppSelector(getFilteredContacts);

  return (
    <Ul>
      {filteredContacts.map(
        element =>
          (searchParams && !element.favorite) || (
            <ContactItem key={element._id} element={element} />
          ),
      )}
    </Ul>
  );
};

export default ContactsList;

const Ul = styled.ul`
  margin-left: -20px;
  margin-top: -20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  ${size.tabletMin} {
    display: flex;
  }
`;
