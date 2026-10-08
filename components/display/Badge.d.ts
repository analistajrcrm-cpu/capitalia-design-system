/** Status marker: availability, stage, payment state. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'ink';
  /** Leading dot for live/status meanings. */
  dot?: boolean;
}
export function Badge(props: BadgeProps): JSX.Element;
