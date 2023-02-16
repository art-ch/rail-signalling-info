import cx from 'classnames';

import { StyledWrapper } from './Light.styled';

import { UIComponent } from '../../../types';

type LightSize = 'small' | 'default';
type LightColor =
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
  return <StyledWrapper className={cx('light', size, color, className)} />;
};

export default Light;
