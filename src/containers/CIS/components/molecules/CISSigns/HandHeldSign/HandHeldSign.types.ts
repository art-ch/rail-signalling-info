import { LightColor } from 'src/components/atoms/Light/Light.types';
import { AnimateSign } from 'src/components/molecules/Sign/Sign.types';

export type HandheldFlagColor = 'red' | 'yellow';

export type HandheldFlagProps = {
  color: HandheldFlagColor;
  folded?: boolean;
} & AnimateSign;

export type HandheldHornAnimatedSignPath =
  | 'stop'
  | 'driveForward'
  | 'driveBackward'
  | 'slowDown';

export type HandheldLightProps = { lightColor?: LightColor } & AnimateSign;

export type HandheldHornProps = AnimateSign<HandheldHornAnimatedSignPath>;

export type HandHeldSignType = 'disc' | 'flag' | 'light' | 'horn';

export type HandHeldSignProps =
  | { type: 'disc' }
  | { type: 'flag'; props: HandheldFlagProps }
  | { type: 'light'; props: HandheldLightProps }
  | { type: 'horn'; props: HandheldHornProps };
