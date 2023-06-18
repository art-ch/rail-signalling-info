import cx from 'classnames';

import { UIComponent } from '../../../types';

import css from './Light.module.scss';

export type LightSize = 'routePointer' | 'small' | 'default';
export type LightColor =
  | 'turnedOff'
  | 'red'
  | 'yellow'
  | 'yellow-flickering'
  | 'green'
  | 'green-flickering'
  | 'moonWhite'
  | 'moonWhite-flickering'
  | 'blue';

export type LightProps = {
  size?: LightSize;
  color?: LightColor;
} & UIComponent;

export const Light = ({
  size = 'default',
  color = 'turnedOff',
  className
}: LightProps) => (
  <div className={cx(css.light, css[size], css[color], className)} />
);
