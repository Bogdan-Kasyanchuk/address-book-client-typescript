import { FC } from 'react';
import styled from 'styled-components';
import { size, accentColor } from '../../styles/variables';
import { IContactContentProps } from '../../interfaces';

const ContactContent: FC<IContactContentProps> = ({ element }) => {
  return (
    <div>
      <TextWrapper>
        <Text>Name:</Text> {element.name}
      </TextWrapper>
      <TextWrapper>
        <Text>Phone:</Text> {element.phone}
      </TextWrapper>
      <TextWrapper>
        <Text>Email:</Text> {element.email}
      </TextWrapper>
      {element.address && (
        <TextWrapper>
          <Text>Address:</Text> {element.address}
        </TextWrapper>
      )}
      {element.other && (
        <TextWrapper>
          <Text>Other:</Text> {element.other}
        </TextWrapper>
      )}
    </div>
  );
};

export default ContactContent;

const TextWrapper = styled.p`
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

const Text = styled.span`
  color: ${accentColor};
`;
