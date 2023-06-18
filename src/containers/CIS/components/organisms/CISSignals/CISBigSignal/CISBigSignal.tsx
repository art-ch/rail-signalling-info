import React from 'react';

import { useCISSignalContext } from 'src/containers/CIS/context';
import {
  CISSignalType,
  CISTrainProtectionZone
} from 'src/containers/CIS/context/CISSignalContext.types';

import { CISSignal } from '../CISSignalRoot/CISSignal';

import { SignalLights } from 'src/types';

import css from './CISBigSignal.module.scss';

export type CISBigSignalProps = {
  id: number;
  aspect: string;
  lights: SignalLights;
};

export const CISBigSignal = ({ id, aspect, lights }: CISBigSignalProps) => {
  const {
    state: { trainProtectionZone, signalType }
  } = useCISSignalContext();

  const { l1, l2, l3, l4, l5 } = lights;

  const humpingSignal =
    signalType === CISSignalType.Humping ||
    trainProtectionZone === CISTrainProtectionZone.ATP4;

  const light1 = l1;
  const light2 = humpingSignal ? l3 : l2;
  const light3 = humpingSignal ? l2 : l3;
  const light4 = l4;
  const light5 = l5;

  const mainSignalProps = {
    plates: [
      {
        lights: [{ color: light1 }, { color: light2 }]
      },
      {
        lights: [{ color: light3 }, { color: light4 }]
      },
      {
        lights: [{ color: light5 }],
        className: css.singleLightPlate
      }
    ]
  };

  const signalElementsUnderPlatesProps = {
    stripes: { aspect },
    conditionalSignalBoard: { aspect },
    routeIndicator: { id, aspect },
    signalTypeSign: { aspect }
  };

  return (
    <CISSignal
      mainSignalProps={mainSignalProps}
      signalElementsUnderPlatesProps={signalElementsUnderPlatesProps}
    />
  );
};
