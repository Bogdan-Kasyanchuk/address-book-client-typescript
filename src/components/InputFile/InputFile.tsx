import { forwardRef, FC } from 'react';
import styled from 'styled-components';
import { IInputFileProps } from '../../interfaces';

const InputFile: FC<IInputFileProps> = forwardRef((props, ref) => {
  const { inputHundler } = props;

  return (
    <Input accept="image/*" type="file" onChange={inputHundler} ref={ref} />
  );
});

export default InputFile;

const Input = styled.input`
  display: none;
`;
