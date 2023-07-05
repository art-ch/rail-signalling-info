import cx from 'classnames';

import { LightProps } from './Light.types';

import css from './Light.module.scss';

export const Light = ({
  size = 'default',
  color = 'turnedOff',
  className
}: LightProps) => (
  <div className={cx(css.light, css[size], css[color], className)} />
);
