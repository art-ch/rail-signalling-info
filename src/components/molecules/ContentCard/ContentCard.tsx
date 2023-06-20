import cx from 'classnames';

import { UIComponent } from 'src/types';

import css from './ContentCard.module.scss';

export type ContentCardProps = {
  children: React.ReactElement[];
} & UIComponent;

export const ContentCard = ({ children, className }: ContentCardProps) => (
  <article className={cx(css.container, className)}>{children}</article>
);
