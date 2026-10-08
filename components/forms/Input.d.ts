/**
 * Text input with label, hint and error state.
 * @startingPoint section="Forms" subtitle="Inputs, selects, toggles" viewport="700x340"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'style'> {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; replaces the hint and turns the border red. */
  error?: string;
  multiline?: boolean;
  rows?: number;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
