import { ReactNode } from 'react';

export interface IModalProps {
  modalHundler: () => void;
  children: ReactNode;
}
