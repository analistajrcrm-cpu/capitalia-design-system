/**
 * Capitalia button: pill-shaped, flat, one orange primary per view.
 * @startingPoint section="Actions" subtitle="Buttons: variants, sizes, states" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** primary = orange, secondary = plum, inverse = bone on dark. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** 'pill' (default), 'petal' for one squared corner, 'square' for dense tables. */
  shape?: 'pill' | 'petal' | 'square';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;
