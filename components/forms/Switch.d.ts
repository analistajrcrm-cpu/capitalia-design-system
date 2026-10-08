/** Immediate-effect toggle. Use Checkbox inside forms that need saving. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>,'style'|'type'> {
  label?: string;
  description?: string;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
