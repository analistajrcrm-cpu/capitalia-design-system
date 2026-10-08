/**
 * Masks photography into one of the brand's four shapes (petal, leaf, circle, arc).
 * @startingPoint section="Brand" subtitle="Photo masks: petal, leaf, circle, arc" viewport="700x260"
 */
export interface PetalFrameProps {
  src?: string;
  alt?: string;
  /** petal = pill with one squared corner; leaf = two points; arc = half-round sweep. */
  shape?: 'petal' | 'leaf' | 'circle' | 'arc';
  /** Which corner the point or flat edge sits on. */
  point?: 'br' | 'bl' | 'tr' | 'tl';
  /** Fixed square size in px; omit to fill the parent at the given ratio. */
  size?: number;
  /** CSS aspect-ratio used when size is omitted. Default "1 / 1". */
  ratio?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function PetalFrame(props: PetalFrameProps): JSX.Element;
