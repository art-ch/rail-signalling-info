import css from './ContentCard.module.scss';

export type ContentCardProps = {
  children: React.ReactElement[];
};

export const ContentCard = ({ children }: ContentCardProps) => (
  <article className={css.container}>{children}</article>
);
