import { UIComponent } from 'src/types';

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
  | 'blue'
  | 'white';

export type LightProps = {
  size?: LightSize;
  color?: LightColor;
} & UIComponent;
