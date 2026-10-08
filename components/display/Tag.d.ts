/** Filter or metadata chip; hairline when idle, plum when selected. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  selected?: boolean;
  /** Renders a × affordance. */
  onRemove?: (e: React.MouseEvent) => void;
}
export function Tag(props: TagProps): JSX.Element;
