/** Short confirmation that appears bottom-centre and leaves on its own. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  tone?: 'info' | 'success' | 'danger';
  /** Optional single action, e.g. an undo link. */
  action?: React.ReactNode;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
