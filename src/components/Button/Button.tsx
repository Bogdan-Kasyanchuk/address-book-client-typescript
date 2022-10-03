import { FC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';
import { size } from '../../styles/variables';
import { IButtonProps } from '../../interfaces';

const Button: FC<IButtonProps> = ({
  icon = false,
  text = false,
  marginAuto = false,
  displayMobileMax = false,
  type = 'button',
  buttonHundler,
  iconName = '',
  children,
  disabled = false,
  ariaLabel,
}) => {
  return (
    <ButtonTag
      marginAuto={marginAuto}
      type={type}
      onClick={buttonHundler}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && <Icon iconName={iconName} />}
      {text && (
        <Text icon={icon} displayMobileMax={displayMobileMax}>
          {children}
        </Text>
      )}
    </ButtonTag>
  );
};

export default Button;

const ButtonTag = styled.button<{ marginAuto: boolean }>`
  display: flex;
  align-items: center;
  ${({ marginAuto }) =>
    marginAuto ? { 'margin-left': 'auto', 'margin-right': 'auto' } : null};

  .icon {
    fill: currentColor;
    stroke: currentColor;
    pointer-events: none;
  }
`;

const Text = styled.span<{ icon: boolean; displayMobileMax: boolean }>`
  margin-left: ${({ icon }) => (icon ? '8px' : null)};
  pointer-events: none;

  ${size.mobileMax} {
    display: ${({ displayMobileMax }) => (displayMobileMax ? 'none' : null)};
  }
`;
