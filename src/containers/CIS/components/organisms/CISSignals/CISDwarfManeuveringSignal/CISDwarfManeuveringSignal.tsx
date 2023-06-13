import React from 'react';
import { LightColor } from 'src/components/atoms/Light';

import { useCISSignalContext } from 'src/containers/CIS/context';
import { CISSignalSignWrapper } from '../../../molecules/CISSignalSignWrapper';
import { CISSignalTypeSign } from '../../../molecules/CISSignalTypeSign';
import { CISDwarfSignal } from '../CISSignalRoot/CISDwarfSignal';

import css from './CISDwarfManeuveringSignal.module.scss';

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

  const mainDwarfSignalProps = {
    plates: [
      {
        lights: [{ color: upperLight }, { color: lowerLight }]
      }
    ],
    amountOfVerticalSupports: 1
  };

  const SignalElementsOnHorizontalSupport = () => (
    <CISSignalSignWrapper>
      <CISSignalTypeSign aspect={aspect} placeElementsHorizontally />
    </CISSignalSignWrapper>
  );

  return (
    <CISDwarfSignal
      mainDwarfSignalProps={mainDwarfSignalProps}
      additionalPlatesContainerClassName={css.container}
      SignalElementsOnHorizontalSupport={SignalElementsOnHorizontalSupport}
    />
  );
};
