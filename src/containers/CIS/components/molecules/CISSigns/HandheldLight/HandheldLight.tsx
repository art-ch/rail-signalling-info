import React from 'react';

import { LightColor } from 'src/components/atoms/Light/Light.types';
import { Plate } from 'src/components/molecules/Plate';

import { CISSign } from '../CISSignRoot';
import { CISSignGripColor } from '../CISSignRoot/CISSign.types';

import css from './HandheldLight.module.scss';

export type HandheldLightProps = {
  lightColor?: LightColor;
  gripColor?: CISSignGripColor;
};

export const HandheldLight = ({
  lightColor = 'turnedOff',
  gripColor = 'black'
}: HandheldLightProps) => {
  return (
    <CISSign type="handheld" gripColor={gripColor}>
      <Plate lights={[{ color: lightColor }]} className={css.plate} />
    </CISSign>
  );
};
