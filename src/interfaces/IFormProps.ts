import { FormEventHandler, ReactNode } from 'react';

export interface IFormProps {
  autoComplete: string;
  formHundler: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
}
