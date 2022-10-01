import { FC } from 'react';
import styled from 'styled-components';
import { size, accentColor } from '../../styles/variables';
import { IContactContentProps } from '../../interfaces';

const ContactContent: FC<IContactContentProps> = ({ element }) => {
  return (
    <div>
      <P>
        <Span>Name:</Span> {element.name}
      </P>
      <P>
        <Span>Phone:</Span> {element.phone}
      </P>
      <P>
        <Span>Email:</Span> {element.email}
      </P>
      {element.address && (
        <P>
          <Span>Address:</Span> {element.address}
        </P>
      )}
      {element.other && (
        <P>
          <Span>Other:</Span> {element.other}
        </P>
      )}
    </div>
  );
};

export default ContactContent;

const P = styled.p`
  line-height: 1.2;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  ${size.tabletMin} {
    display: inline-block;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const Span = styled.span`
  color: ${accentColor};
`;
