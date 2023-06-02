import React from 'react';
import { LightColor } from 'src/components/atoms/Light';

import { useCISSignalContext } from 'src/containers/CIS/context';
import { CISSignalSignWrapper } from '../../../molecules/CISSignalSignWrapper';
import { CISSignalTypeSign } from '../../../molecules/CISSignalTypeSign';
import { CISDwarfSignal } from '../CISSignalRoot/CISDwarfSignal';

export type CISDwarfManeuveringSignalProps = { aspect: string };

export const CISDwarfManeuveringSignal = ({
  aspect
}: CISDwarfManeuveringSignalProps) => {
  const {
    state: { signalType }
  } = useCISSignalContext();

  const moonWhiteAspect = aspect === 'moonWhite';
  const blueAspect = aspect === 'blue';

  const upperLight: LightColor =
    (moonWhiteAspect && 'moonWhite') || 'turnedOff';

  const lowerLight: LightColor = (blueAspect && 'blue') || 'turnedOff';

  const dwarfSignalProps = {
    plates: [{ lights: [{ color: upperLight }, { color: lowerLight }] }],
    amountOfVerticalSupports: 1
  };

  const SignalElementsUnderPlates = () => (
    <CISSignalSignWrapper>
      <CISSignalTypeSign aspect={aspect} />
    </CISSignalSignWrapper>
  );

  return <CISDwarfSignal {...dwarfSignalProps} />;
};
