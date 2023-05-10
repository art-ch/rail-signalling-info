export type ContentCardProps = {
  children: React.ReactElement[];
};

export const ContentCard = ({ children }: ContentCardProps) => (
  <article>{children}</article>
);
