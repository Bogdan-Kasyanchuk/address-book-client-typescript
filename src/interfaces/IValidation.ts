export interface IValidationItem {
  required: string;
  minLength?: {
    value: number;
    message: string;
  };
  pattern: {
    value: RegExp;
    message: string;
  };
}

export interface IValidation {
  [key: string]: IValidationItem;
}
