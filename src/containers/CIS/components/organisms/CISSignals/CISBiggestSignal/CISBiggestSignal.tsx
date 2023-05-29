import React from 'react';

import { SignalLights } from 'src/types';
import { CISSignal } from '../CISSignalRoot/CISSignal';

export type CISBiggestSignalProps = {
  id: number;
  aspect: string;
  lights: SignalLights;
};

export const CISBiggestSignal = ({
  id,
  aspect,
  lights
}: CISBiggestSignalProps) => {
  const { l1, l2, l3, l4, l5 } = lights;

  const yellowGreenSignal = aspect === 'yellow-green';

  const light1 = l1;
  const light2 = yellowGreenSignal ? l3 : l2;
  const light3 = yellowGreenSignal ? l2 : l3;
  const light4 = l4;
  const light5 = l5;

  const signalProps = {
    plates: [
      {
        lights: [{ color: light1 }, { color: light2 }, { color: light3 }]
      },
      {
        lights: [{ color: light4 }, { color: light5 }]
      }
    ]
  };

  return <CISSignal {...signalProps} />;
};
