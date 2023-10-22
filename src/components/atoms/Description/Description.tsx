import cx from 'classnames';

import { UIComponent } from 'src/types';

import css from './Description.module.scss';

export type DescriptionProps = {
  title: string;
  mainText: string;
} & UIComponent;

export const Description = ({
  title,
  mainText,
  className
}: DescriptionProps) => (
  <div className={cx(css.container, className)}>
    <h3 className={css.title}>{title}</h3>
    <p className={css.mainText}>{mainText}</p>
  </div>
);
