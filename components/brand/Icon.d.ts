/** Lucide outline icon, tinted with currentColor. Substitution — the brand book ships no icon set. */
export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-right", "map-pin". */
  name?: string;
  /** Square size in px. Default 20. */
  size?: number;
  /** Ignored (the CDN SVG is fixed at 2px stroke); documented for API parity. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
