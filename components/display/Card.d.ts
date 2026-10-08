/**
 * Container for a unit of content, optionally with a masked photo band on top.
 * @startingPoint section="Display" subtitle="Cards, badges, tags, stats" viewport="700x360"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  tone?: 'default' | 'bone' | 'ink' | 'accent';
  /** CSS padding for the body. */
  padding?: string;
  /** Adds hover lift + image zoom, and a pointer cursor. */
  interactive?: boolean;
  /** Image URL for the top band. */
  media?: string;
  /** How the image band is cut. */
  mediaShape?: 'arc' | 'square' | 'petal';
}
export function Card(props: CardProps): JSX.Element;
