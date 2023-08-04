import { UIComponent } from 'src/types';
import {
  PermanentGradientPoleProps,
  TemporaryGradientPoleProps
} from '../CISSignRoot/components/GradientPole/GradientPole.types';

export type SlowDownSignMutualProps = {
  innerFrameColor: string;
};

export type SlowDownPermanentProps = SlowDownSignMutualProps &
  PermanentGradientPoleProps;
export type SlowDownTemporaryProps = SlowDownSignMutualProps &
  TemporaryGradientPoleProps;

export type SlowDownDiscriminantProps =
  | SlowDownPermanentProps
  | SlowDownTemporaryProps;

export type SlowDownProps = SlowDownDiscriminantProps & UIComponent;
