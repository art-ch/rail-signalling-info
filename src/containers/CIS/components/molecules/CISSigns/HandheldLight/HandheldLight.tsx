import React from 'react';

import { LightColor } from 'src/components/atoms/Light/Light.types';
import { Plate } from 'src/components/molecules/Plate';
import { SignProps } from 'src/components/molecules/Sign/Sign.types';

import { CISSign } from '../CISSignRoot';

import css from './HandheldLight.module.scss';

export type HandheldLightProps = {
  lightColor?: LightColor;
} & Pick<SignProps, 'animatedSignPath'>;

export const HandheldLight = ({
  lightColor = 'turnedOff',
  animatedSignPath
}: HandheldLightProps) => {
  return (
    <CISSign
      type="handheld"
      gripColor="black"
      animatedSignPath={animatedSignPath}
    >
      <Plate
        lights={[
          {
            color: lightColor,
            customCss: { moonWhite: css.moonWhite, yellow: css.yellow }
          }
        ]}
        className={css.plate}
      />
    </CISSign>
  );
};
