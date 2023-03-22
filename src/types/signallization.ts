export type SignalLights = {
  [key: `l${number}`]: string;
};

export type SignalInfo = {
  type: string;
  description: string;
  [key: `${string}Description`]: string;
};

export type Signal = {
  id: number;
  info: SignalInfo[];
  name: string;
  lights: SignalLights;
};

export type SignalTypeSign = {
  type: string;
  letters: string[];
};

export type Filters = {
  title: string;
  filters: {
    id: number;
    name: string;
    displayName: string;
  }[];
};

export type Sign = {
  id: number;
  sign: string;
  description: string;
};
