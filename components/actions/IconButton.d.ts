/** Icon-only button; always give it an accessible label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The glyph — usually <Icon />. */
  children?: React.ReactNode;
  /** aria-label text. Required in practice. */
  label?: string;
  variant?: 'ghost' | 'solid' | 'accent' | 'outline' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'pill' | 'petal' | 'square';
  disabled?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
