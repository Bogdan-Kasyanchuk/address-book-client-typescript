import { FC } from 'react';
import { IInputFilterProps } from '../../interfaces';

const InputFilter: FC<IInputFilterProps> = ({
  autoComplete,
  type,
  value,
  placeholder,
  inputHundler,
}) => {
  return (
    <input
      autoComplete={autoComplete}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={inputHundler}
    />
  );
};

export default InputFilter;
