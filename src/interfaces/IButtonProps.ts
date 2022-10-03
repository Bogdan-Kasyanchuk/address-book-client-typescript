import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonProps {
  icon?: boolean;
  text?: boolean;
  marginAuto?: boolean;
  displayMobileMax?: boolean;
  type?: 'button' | 'submit';
  buttonHundler?: MouseEventHandler<HTMLButtonElement>;
  iconName?: string;
  children?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
}
