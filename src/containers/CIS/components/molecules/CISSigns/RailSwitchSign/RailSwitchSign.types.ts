import { LightColor } from 'src/components/atoms/Light/Light.types';
import { SignProps } from 'src/components/molecules/Sign/Sign.types';

export type RailSwitchSignMode =
  | 'straightDay'
  | 'straightNight'
  | 'straightAnalog'
  | 'divert'
  | 'divertAnalog';

export type RailSwitchSignProps = {
  mode: RailSwitchSignMode;
  lightColor?: LightColor;
} & Pick<SignProps, 'atDistance'>;
