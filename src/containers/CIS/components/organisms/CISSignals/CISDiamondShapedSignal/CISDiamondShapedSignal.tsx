import React from 'react';

import { CISSignal } from '../CISSignalRoot/CISSignal';

import { useCISSignalContext } from 'src/containers/CIS/context';

import { LightColor } from 'src/components/atoms/Light';

import { SignalLights } from 'src/types';
import { CISSignalType } from 'src/containers/CIS/context/CISSignalContext.types';

import css from './CISDiamondShapedSignal.module.scss';

export type CISDiamondShapedSignalProps = {
  id: number;
  aspect: string;
  lights: SignalLights;
};

export const CISDiamondShapedSignal = ({
  id,
  aspect,
  lights
}: CISDiamondShapedSignalProps) => {
  const {
    state: { signalType }
  } = useCISSignalContext();

  let signalLight: LightColor = 'turnedOff';

  const passedLight = Object.values(lights).filter(
    (light) => light !== 'turnedOff'
  )[0];

  const turnedOnSignal = passedLight?.length;

  if (turnedOnSignal) {
    signalLight = passedLight;
  }

  const obstructionPole = signalType === CISSignalType.Obstruction || id === 32;
  const obstructionPoleClassName = obstructionPole && {
    className: css.obstructionPole
  };

  const signalProps = {
    plates: [
      { lights: [{ color: signalLight }], className: css.diamondShapedPlate }
    ],
    ...obstructionPoleClassName
  };

  return <CISSignal {...signalProps} />;
};
