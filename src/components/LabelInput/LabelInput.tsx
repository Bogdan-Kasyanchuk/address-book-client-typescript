import { FC } from 'react';
import styled from 'styled-components';
import { accentColor } from '../../styles/variables';
import { ILabelInputProps } from '../../interfaces';

const LabelInput: FC<ILabelInputProps> = ({
  marginBottom = '20px',
  marginRight = null,
  children,
}) => {
  return (
    <Label marginRight={marginRight} marginBottom={marginBottom}>
      {children}
    </Label>
  );
};

export default LabelInput;

const Label = styled.label<{
  marginRight: string | null;
  marginBottom: string;
}>`
  position: relative;
  display: block;
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: 20px;

  :focus-within {
    color: ${accentColor};
  }
`;
