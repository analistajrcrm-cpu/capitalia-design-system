/**
 * Pill-with-one-squared-corner label: the "capitalia.mx" and "ETAPA 1" shape.
 * @startingPoint section="Brand" subtitle="Signature petal-corner label in every tone" viewport="700x150"
 */
export interface PetalTagProps {
  children?: React.ReactNode;
  /** Fill. Default bone. */
  tone?: 'bone' | 'plum' | 'orange' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** Which corner is squared off. Default bottom-right, as in the collateral. */
  corner?: 'br' | 'bl' | 'tr' | 'tl';
  /** Track out and uppercase, for stage/step labels. */
  uppercase?: boolean;
  style?: React.CSSProperties;
}
export function PetalTag(props: PetalTagProps): JSX.Element;
