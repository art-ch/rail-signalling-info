import React from 'react';

import { useCISSignalContext } from 'src/containers/CIS/context';

import { CISSignal } from '../CISSignalRoot/CISSignal';

import {
  CISSignalType,
  CISTrainProtectionZone
} from 'src/containers/CIS/context/CISSignalContext.types';
import { SignalLights } from 'src/types';

import CISSignalCSS from '../CISSignalRoot/CISSignal/CISSignal.module.scss';

export type CISRegularSignalProps = { aspect: string; lights: SignalLights };

export const CISRegularSignal = ({ aspect, lights }: CISRegularSignalProps) => {
  const {
    state: { trainProtectionZone, signalType }
  } = useCISSignalContext();

  const { l1, l2, l3, l5 } = lights;

  const fifthLightActive = l5 !== 'turnedOff';
  const technologicalSignal = signalType === CISSignalType.Technological;
  const blockYellowGreenSignal =
    signalType === CISSignalType.Block && aspect === 'yellow-green';

  const fourAspectBlockingSignal =
    trainProtectionZone === CISTrainProtectionZone.ATP4 ||
    blockYellowGreenSignal ||
    signalType === CISSignalType.Humping;

  const upperLight =
    (fifthLightActive && l5) || (technologicalSignal && 'turnedOff') || l1;

  const middleLight =
    (fourAspectBlockingSignal && l3) || (technologicalSignal && l1) || l2;

  const lowerLight = (fourAspectBlockingSignal && l2) || l3;

  const signalProps = {
    plates: [
      {
        lights: [
          { color: upperLight },
          { color: middleLight },
          { color: lowerLight }
        ]
      }
    ],
    className: CISSignalCSS.regularSignalPole
  };

  return <CISSignal {...signalProps} />;
};
