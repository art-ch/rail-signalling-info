import { LightColor } from 'src/components/atoms/Light';

export type SignalizationFilterModel = {
  id: number;
  name: string;
  displayName: string;
};

export type SignalLights = {
  [key: `l${number}`]: LightColor;
};

export type SignalInfo = {
  type: string;
  description: string;
  [key: `${string}Description`]: string;
};

export type SignalTypeSign = {
  type: string;
  letters: string[];
};
