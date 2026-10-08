/** Names an icon-only control on hover and focus. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The text shown. Two to four words. */
  label?: string;
  children?: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
export function Tooltip(props: TooltipProps): JSX.Element;
