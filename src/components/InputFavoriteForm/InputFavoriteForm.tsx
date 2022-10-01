import { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import { accentColor, bgColor } from '../../styles/variables';
import { IInputFavoriteForm } from '../../interfaces';

const InputFavoriteForm: FC<IInputFavoriteForm> = ({ name, register }) => {
  const [check, setCheck] = useState<boolean>(false);

  const checkHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
  };

  return (
    <Label>
      {name}
      <SpanInput>
        <InputCheckbox
          name={name}
          register={register}
          inputCheckHandler={checkHandler}
        />
        <Span checkedType={check}></Span>
      </SpanInput>
    </Label>
  );
};

export default InputFavoriteForm;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
`;

const SpanInput = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 2px solid ${accentColor};
  border-radius: 50%;
`;

const Span = styled.span<{ checkedType: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ checkedType }) =>
    checkedType ? accentColor : bgColor};
`;
