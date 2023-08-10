import React from 'react';

import cx from 'classnames';

import { Plate } from 'src/components/molecules/Plate';

import { CISSign } from '../../../CISSignRoot';

import { HandheldLightProps } from '../../HandHeldSign.types';

import css from './HandheldLight.module.scss';
import commonCISSignCSS from '../../../CISSignRoot/CISSign.module.scss';

export const HandheldLight = ({
  lightColor = 'turnedOff',
  animatedSignPath
}: HandheldLightProps) => {
  return (
    <CISSign type="handheld" grip="black" animatedSignPath={animatedSignPath}>
      <Plate
        lights={[
          {
            color: lightColor
          }
        ]}
        className={cx(css.plate, commonCISSignCSS.plate)}
      />
    </CISSign>
  );
};