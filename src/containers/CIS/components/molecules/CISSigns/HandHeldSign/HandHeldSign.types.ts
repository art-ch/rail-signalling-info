import { LightColor } from 'src/components/atoms/Light/Light.types';
import { AnimateSign } from 'src/components/molecules/Sign/Sign.types';

export type HandheldFlagColor = 'red' | 'yellow';

export type HandheldFlagProps = {
  color: HandheldFlagColor;
  folded?: boolean;
};

export type HandheldHornAnimatedSignPath =
  | 'stop'
  | 'driveForward'
  | 'driveBackward'
  | 'slowDown';

export type HandheldLightProps = { lightColor?: LightColor } & AnimateSign;

export type HandheldHornProps = AnimateSign<HandheldHornAnimatedSignPath>;

export type HandHeldSignType = 'disc' | 'flag' | 'light' | 'horn';

export type HandHeldSignProps = {
  type: HandHeldSignType;
  props?: HandheldFlagProps | HandheldLightProps;
} & AnimateSign;
