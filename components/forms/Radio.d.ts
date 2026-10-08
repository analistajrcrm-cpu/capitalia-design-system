/** Exclusive choice among 2–4 visible options. */
export interface RadioProps {
  name?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Group label. */
  label?: string;
  direction?: 'column' | 'row';
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
