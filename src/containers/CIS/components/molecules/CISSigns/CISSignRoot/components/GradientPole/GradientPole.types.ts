import { PropsWithChildren } from 'react';

export type PermanentGradientPoleProps = {
  temporary?: false;
};
export type TemporaryGradientPoleProps = {
  temporary?: true;
  poleGradientColor?: string;
};

export type DiscriminantGradientPoleProps =
  | PermanentGradientPoleProps
  | TemporaryGradientPoleProps;

export type GradientPoleProps =
  PropsWithChildren<DiscriminantGradientPoleProps>;
