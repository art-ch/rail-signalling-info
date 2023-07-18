import { LightColor } from 'src/components/atoms/Light/Light.types';
import { SignProps } from 'src/components/molecules/Sign/Sign.types';

export type CISRailSwitchSignMode =
  | 'straightDay'
  | 'straightNight'
  | 'straightAnalog'
  | 'divert'
  | 'divertAnalog';

export type CISRailSwitchSignProps = {
  mode: CISRailSwitchSignMode;
  lightColor?: LightColor;
} & Pick<SignProps, 'atDistance'>;
