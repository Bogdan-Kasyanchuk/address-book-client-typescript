import { FC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { size } from '../../styles/variables';
import { IButtonIconTextProps } from '../../interfaces';

const ButtonIconText: FC<IButtonIconTextProps> = ({
  type,
  buttonHundler,
  iconName,
  displayMobileMax = true,
  children,
}) => {
  return (
    <Button type={type} onClick={buttonHundler}>
      <Icon iconName={iconName} />
      <Span displayMobileMax={displayMobileMax}>{children}</Span>
    </Button>
  );
};

export default ButtonIconText;

const Button = styled.button`
  display: flex;
  align-items: center;

  .icon {
    fill: currentColor;
    stroke: currentColor;
    pointer-events: none;
  }
`;

const Span = styled.span<{ displayMobileMax: boolean }>`
  margin-left: 8px;
  pointer-events: none;

  ${size.mobileMax} {
    display: none;
  }

  display: ${({ displayMobileMax }) => (displayMobileMax ? null : 'none')};
`;
