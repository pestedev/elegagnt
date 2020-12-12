export interface InputVerificationProps {
  onChange?: Function;
  onComplete?: Function;
  digit: number;
  autoFocus?: boolean;
}

export interface DefaultInputWithSplitterProps {
  handleValueChange?: Function;
  caption: string;
  error?: any;
  type?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  dir?: 'LTR' | 'RTL';
  forWardref?: React.Ref;
  autoComplete?: boolean;
  LabelWidth?: string;
  values?: {id: string; caption: string}[];
  value?: string;
  defaultValue?:any;
}
