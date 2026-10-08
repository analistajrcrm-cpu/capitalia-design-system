/** Multi-select control with optional description line. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'style'|'type'> {
  label?: React.ReactNode;
  /** Secondary line under the label. */
  description?: string;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
