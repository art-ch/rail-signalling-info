import { PropsWithChildren, UIComponent } from 'src/types';

export type SlowDownSignMutualProps = {
  innerFrameColor: string;
};

export type SlowDownPermanentProps = {
  temporary?: false;
};
export type SlowDownTemporaryProps = {
  temporary?: true;
  poleGradientColor: string;
};

export type SlowDownPermanentSignProps = SlowDownSignMutualProps &
  SlowDownPermanentProps;
export type SlowDownTemporarySignProps = SlowDownSignMutualProps &
  SlowDownTemporaryProps;

export type SlowDownPoleDiscriminantProps =
  | SlowDownPermanentProps
  | SlowDownTemporaryProps;

export type SlowDownSignDiscriminantProps =
  | SlowDownPermanentSignProps
  | SlowDownTemporarySignProps;

export type SlowDownProps = SlowDownSignDiscriminantProps & UIComponent;

export type SlowDownPoleProps =
  PropsWithChildren<SlowDownPoleDiscriminantProps>;
