/**
 * The Capitalia logo, rendered from the supplied artwork files.
 * @startingPoint section="Brand" subtitle="Logo lockups, mark and wordmark in every tone" viewport="700x180"
 */
export interface LogoProps {
  /** Which piece of artwork to show. */
  variant?: 'lockup-vertical' | 'lockup-horizontal' | 'mark' | 'wordmark';
  /** Colourway. 'orange' and 'white' exist for the mark only. */
  tone?: 'plum' | 'bone' | 'orange' | 'white';
  /** Rendered height in px. Width follows. */
  height?: number;
  /** Path to assets/logo, relative to the page. */
  assetBase?: string;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
