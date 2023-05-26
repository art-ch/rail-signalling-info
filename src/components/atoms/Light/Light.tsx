import cx from 'classnames';

import { UIComponent } from '../../../types';

import css from './Light.module.scss';

type LightSize = 'small' | 'default';
export type LightColor =
  | 'turnedOff'
  | 'red'
  | 'yellow'
  | 'yellow-flickering'
  | 'green'
  | 'green-flickering'
  | 'blue'
  | 'moonWhite';

export type LightProps = {
  size?: LightSize;
  color?: LightColor;
} & UIComponent;

export const Light = ({
  size = 'default',
  color = 'turnedOff',
  className
}: LightProps) => {
  return <div className={cx(css.light, css[size], css[color], className)} />;
};

export default Light;
