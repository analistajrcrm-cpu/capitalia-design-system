/** Modal for a single decision or a short form. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  children?: React.ReactNode;
  /** Action row, right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px. Default 520. */
  width?: number;
}
export function Dialog(props: DialogProps): JSX.Element | null;
