import { FC } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import TextArea from '../TextArea/TextArea';
import { ITextAreaFormProps } from '../../interfaces';

const TextAreaForm: FC<ITextAreaFormProps> = ({
  name,
  defaultValue,
  register,
  placeholder,
  title,
}) => {
  return (
    <LabelInput>
      {name}
      <TextArea
        defaultValue={defaultValue}
        register={register}
        name={name}
        placeholder={placeholder}
        title={title}
      />
    </LabelInput>
  );
};

export default TextAreaForm;
