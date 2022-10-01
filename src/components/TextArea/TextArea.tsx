import { FC } from 'react';
import styled from 'styled-components';
import { ITextAreaProps } from '../../interfaces';

const TextAreaForm: FC<ITextAreaProps> = ({
  name,
  defaultValue,
  register,
  placeholder,
  title,
}) => {
  return (
    <Textarea
      defaultValue={defaultValue}
      {...register(name.toLowerCase() as 'other')}
      placeholder={placeholder}
      title={title}
    />
  );
};

export default TextAreaForm;

const Textarea = styled.textarea`
  display: block;
  resize: none;
`;
