/** Native select styled to match Input. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>,'style'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Strings, or {value,label} pairs. */
  options?: Array<string | { value: string; label: string }>;
  /** First, empty option. Pass "" to omit. */
  placeholder?: string;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
