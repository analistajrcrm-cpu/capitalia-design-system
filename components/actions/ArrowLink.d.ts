/**
 * Thin arrow above a solid-block label — the signature/deck pointer motif.
 * @startingPoint section="Actions" subtitle="Arrow + highlighted label motif" viewport="700x180"
 */
export interface ArrowLinkProps {
  children?: React.ReactNode;
  href?: string;
  direction?: 'down-right' | 'right' | 'down';
  tone?: 'default' | 'inverse';
  style?: React.CSSProperties;
}
export function ArrowLink(props: ArrowLinkProps): JSX.Element;
