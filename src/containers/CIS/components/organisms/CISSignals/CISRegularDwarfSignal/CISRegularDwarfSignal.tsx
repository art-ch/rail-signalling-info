import React from 'react';

import { SignalLights } from 'src/types';
import { CISSignalSignWrapper } from '../../../molecules/CISSignalSignWrapper';
import { CISSignalTypeSign } from '../../../molecules/CISSignalTypeSign';
import { CISDwarfSignal } from '../CISSignalRoot/CISDwarfSignal';

export type CISRegularDwarfSignalProps = {
  aspect: string;
  lights: SignalLights;
};

export const CISRegularDwarfSignal = ({
  aspect,
  lights
}: CISRegularDwarfSignalProps) => {
  const { l1, l2, l3, l5 } = lights;

  const light1 = l5;
  const light2 = l3;
  const light3 = l1;
  const light4 = l2;

  const mainDwarfSignalProps = {
    plates: [
      { lights: [{ color: light1 }, { color: light2 }] },
      { lights: [{ color: light3 }, { color: light4 }] }
    ]
  };

  const SignalElementsOnHorizontalSupport = () => (
    <CISSignalSignWrapper>
      <CISSignalTypeSign aspect={aspect} placeElementsHorizontally />
    </CISSignalSignWrapper>
  );

  return (
    <CISDwarfSignal
      mainDwarfSignalProps={mainDwarfSignalProps}
      SignalElementsOnHorizontalSupport={SignalElementsOnHorizontalSupport}
    />
  );
};
