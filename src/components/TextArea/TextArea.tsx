import { FC } from 'react';
import styled from 'styled-components';
import { ITextAreaProps } from '../../interfaces';

const TextArea: FC<ITextAreaProps> = ({
  name,
  defaultValue,
  register,
  placeholder,
  title,
}) => {
  return (
    <Textarea
      defaultValue={defaultValue}
      {...register(name)}
      placeholder={placeholder}
      title={title}
    />
  );
};

export default TextArea;

const Textarea = styled.textarea`
  display: block;
  resize: none;
`;
