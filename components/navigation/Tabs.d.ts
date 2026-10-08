/**
 * Underlined tab strip with an orange active rule.
 * @startingPoint section="Navigation" subtitle="Tab strip, light and inverse" viewport="700x150"
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  tone?: 'default' | 'inverse';
}
export function Tabs(props: TabsProps): JSX.Element;
