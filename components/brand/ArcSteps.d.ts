/**
 * Concentric hairline arcs with numbered nodes — the deck's benefits/steps layout.
 * @startingPoint section="Brand" subtitle="Numbered arc list from the deck" viewport="700x400"
 */
export interface ArcStepsProps {
  /** One string per step, in order. Three to five reads best. */
  items?: string[];
  /** 'inverse' on plum (default), 'default' on cream. */
  tone?: 'inverse' | 'default';
  style?: React.CSSProperties;
}
export function ArcSteps(props: ArcStepsProps): JSX.Element;
