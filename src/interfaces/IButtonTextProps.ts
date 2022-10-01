import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonTextProps {
  disabled?: boolean;
  type: 'button' | 'submit';
  buttonHundler?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
