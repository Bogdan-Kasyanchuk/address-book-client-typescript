import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ContactCreate from '../ContactCreate/ContactCreate';
import ContactFavorite from '../ContactFavorite/ContactFavorite';
import Filter from '../Filter/Filter';
import SubTitle from '../SubTitle/SubTitle';
import ContactsList from '../ContactsList/ContactsList';

const Contacts: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Div>
        <ContactCreate />
        <ContactFavorite
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Div>
      <Div alignItems="flex-end" maxWidth="450px">
        <Filter />
      </Div>
      <SubTitle>Contacts list</SubTitle>
      <ContactsList searchParams={searchParams.get('favorite')} />
    </>
  );
};

export default Contacts;

const Div = styled.div<{ alignItems?: string; maxWidth?: string }>`
  display: flex;
  justify-content: space-around;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  max-width: ${({ maxWidth }) => maxWidth || '360px'};
  margin: 0 auto 30px;
`;
