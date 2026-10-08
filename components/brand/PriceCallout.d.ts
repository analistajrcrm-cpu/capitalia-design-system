/**
 * The offer stack: bold label, orange figure, quiet unit.
 * @startingPoint section="Brand" subtitle="Price / offer stack in brand hierarchy" viewport="700x180"
 */
export interface PriceCalloutProps {
  /** Bold lead-in, e.g. "Mensualidades desde". */
  label?: string;
  /** The figure. Orange, always the largest element. */
  amount?: string;
  /** Currency or per-unit suffix, e.g. "mxn", "al mes". */
  unit?: string;
  /** Secondary line, e.g. "Lotes desde 140 m2". */
  note?: string;
  tone?: 'inverse' | 'default';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export function PriceCallout(props: PriceCalloutProps): JSX.Element;
