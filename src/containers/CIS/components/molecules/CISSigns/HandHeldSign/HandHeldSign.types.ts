import { LightColor } from 'src/components/atoms/Light/Light.types';
import {
  AnimatedSignPath,
  SignProps
} from 'src/components/molecules/Sign/Sign.types';

export type HandheldFlagColor = 'red' | 'yellow';

export type HandheldFlagProps = {
  color: HandheldFlagColor;
  folded?: boolean;
  animatedSignPath?: AnimatedSignPath;
};

export type HandheldLightProps = {
  lightColor?: LightColor;
} & Pick<SignProps, 'animatedSignPath'>;

export type HandHeldSignType = 'disc' | 'flag' | 'light';

export type HandHeldSignProps = {
  type: HandHeldSignType;
  props?: HandheldFlagProps | HandheldLightProps;
};
