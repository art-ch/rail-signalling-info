import React from 'react';

import { CISSignal } from '../CISSignalRoot/CISSignal';

import { useCISSignalContext } from 'src/containers/CIS/context';
import { CISSignalType } from 'src/containers/CIS/context/CISSignalContext.types';

import { SignalLights } from 'src/types';

import CISSignalCSS from '../CISSignalRoot/CISSignal/CISSignal.module.scss';

export type CISSmallSignalProps = { aspect: string; lights: SignalLights };

export const CISSmallSignal = ({ aspect, lights }: CISSmallSignalProps) => {
  const {
    state: { signalType }
  } = useCISSignalContext();

  const { l1, l2, l3, l5 } = lights;

  const anyOfYellowAspects =
    aspect === 'yellow' || aspect === 'yellow-flickering';

  const upperLight =
    (aspect === 'green' && l2) ||
    (aspect === 'moonWhite' && l5) ||
    (signalType === CISSignalType.Industrial && anyOfYellowAspects && l1) ||
    'turnedOff';

  const lowerLight =
    (aspect === 'blue' && 'blue') ||
    (aspect === 'red' && l3) ||
    (signalType === CISSignalType.Warning && anyOfYellowAspects && l1) ||
    'turnedOff';

  const signalProps = {
    plates: [{ lights: [{ color: upperLight }, { color: lowerLight }] }],
    className: CISSignalCSS.regularSignalPole
  };

  return <CISSignal {...signalProps} />;
};
