/** Big figure with a quiet label; optional petal-shaped orange plate. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: React.ReactNode;
  label?: string;
  tone?: 'default' | 'inverse' | 'accent';
  /** Wraps the stat in an orange petal plate, as on the deck's "25k" slide. */
  petal?: boolean;
  align?: 'left' | 'center';
}
export function Stat(props: StatProps): JSX.Element;
