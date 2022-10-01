import { ReactNode } from 'react';

export interface ILinkProps {
  to: string;
  end?: boolean;
  iconName: string;
  children: ReactNode;
}
