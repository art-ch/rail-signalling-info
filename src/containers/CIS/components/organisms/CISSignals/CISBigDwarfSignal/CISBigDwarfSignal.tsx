import React from 'react';

import { SignalLights } from 'src/types';
import { CISDwarfSignal } from '../CISSignalRoot/CISDwarfSignal';

export type CISBigDwarfSignalProps = {
  aspect: string;
  lights: SignalLights;
};

export const CISBigDwarfSignal = ({
  aspect,
  lights
}: CISBigDwarfSignalProps) => {
  const { l1, l2, l3, l4, l5 } = lights;

  const twoYellowsSpecialAspect = aspect === 'two-yellows-special';

  const light1 = l5;
  const light2 = (!twoYellowsSpecialAspect && l3) || 'turnedOff';
  const light3 = (twoYellowsSpecialAspect && l1) || l2;
  const light4 = (!twoYellowsSpecialAspect && l1) || 'turnedOff';
  const light5 = (twoYellowsSpecialAspect && l3) || l4;

  const dwarfSignalProps = {
    plates: [
      { lights: [{ color: light1 }, { color: light2 }] },
      { lights: [{ color: light3 }, { color: light4 }, { color: light5 }] }
    ]
  };

  return <CISDwarfSignal {...dwarfSignalProps} />;
};
