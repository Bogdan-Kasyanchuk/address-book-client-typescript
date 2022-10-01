import { FC } from 'react';
import { IInputStandartProps } from '../../interfaces';

const InputStandart: FC<IInputStandartProps> = ({
  type,
  defaultValue,
  register,
  name,
  validation,
  placeholder,
  title,
}) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      {...register(name, validation)}
      placeholder={placeholder}
      title={title}
    />
  );
};

export default InputStandart;
