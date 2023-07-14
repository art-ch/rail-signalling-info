import React from 'react';
import { LightColor } from 'src/components/atoms/Light/Light.types';

import { useCISSignalContext } from 'src/containers/CIS/context';

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

  const signalElementsOnHorizontalSupportProps = {
    signalTypeSign: { aspect }
  };

  return (
    <CISDwarfSignal
      mainDwarfSignalProps={mainDwarfSignalProps}
      additionalPlatesContainerClassName={css.container}
      signalElementsOnHorizontalSupportProps={
        signalElementsOnHorizontalSupportProps
      }
    />
  );
};
