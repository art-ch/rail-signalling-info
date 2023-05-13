import cx from 'classnames';

import css from './Description.module.scss';
import { UIComponent } from 'src/types';

export type DescriptionProps = {
  title: string;
  mainText: string;
} & UIComponent;

export const Description = ({ title, mainText, className }) => (
  <div className={cx(css.container, className)}>
    <h3 className={css.title}>{title}</h3>
    <p className={css.mainText}>{mainText}</p>
  </div>
);
