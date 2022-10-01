import { FC } from 'react';
import styled from 'styled-components';
import LabelInput from '../LabelInput/LabelInput';
import InputStandart from '../InputStandart/InputStandart';
import { errorColor } from '../../styles/variables';
import { IInputStandartFormProps, IInputStandartProps } from '../../interfaces';

const InputStandartForm: FC<IInputStandartFormProps> = ({
  name,
  type,
  defaultValue,
  register,
  validation,
  placeholder,
  title,
  errors,
}) => {
  const toLowerCaseName = name.toLowerCase() as IInputStandartProps['name'];

  return (
    <LabelInput>
      {name}
      <InputStandart
        type={type}
        defaultValue={defaultValue}
        register={register}
        name={toLowerCaseName}
        validation={validation}
        placeholder={placeholder}
        title={title}
      />
      {errors && <P>{errors?.[toLowerCaseName]?.message}</P>}
    </LabelInput>
  );
};

export default InputStandartForm;

const P = styled.p`
  position: absolute;
  top: 65px;
  font-size: 12px;
  color: ${errorColor};
`;
