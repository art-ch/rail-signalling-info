import { UIComponent } from 'src/types';

export type LightSize = 'routePointer' | 'small' | 'default';

export type LightColor =
  // standard colors
  | 'turnedOff'
  | 'red'
  | 'yellow'
  | 'yellow-flickering'
  | 'green'
  | 'green-flickering'
  | 'moonWhite'
  | 'moonWhite-flickering'
  | 'blue'

  // specific case colors
  | 'white';

export type LightProps = {
  size?: LightSize;
  color?: LightColor;
} & UIComponent;
