import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonIconTextProps {
  type: 'button' | 'submit';
  buttonHundler?: MouseEventHandler<HTMLButtonElement>;
  iconName: string;
  displayMobileMax?: boolean;
  children: ReactNode;
  disabled?: boolean;
}
