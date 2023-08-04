import React from 'react';

import cx from 'classnames';

import { CISSign } from '../CISSignRoot';

import { Board } from 'src/components/atoms/Board';
import { Light } from 'src/components/atoms/Light';

import { useCISSignalContext } from 'src/containers/CIS/context';

import { getImageFromList } from 'src/utils/miscelaneousUtils';

import { RailSwitchSignProps } from './RailSwitchSign.types';

import css from './RailSwitchSign.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export const RailSwitchSign = ({
  mode,
  lightColor = 'turnedOff',
  atDistance = false
}: RailSwitchSignProps) => {
  const {
    content: { imageSigns }
  } = useCISSignalContext();

  const isDivertSign = mode === 'divert';
  const isDivertAnalogSign = mode === 'divertAnalog';

  if (isDivertAnalogSign) {
    const divertAnalogSign = getImageFromList({
      imageList: imageSigns,
      imageTitle: 'Divert Analog Sign'
    });

    return <CISSign imageSign {...divertAnalogSign} />;
  }

  return (
    <CISSign gripColor="black" type="dwarfStandalone" atDistance={atDistance}>
      <div className={commonCISSignCSS.cap} />
      <Board className={cx(commonCISSignCSS.frame, css.frame, css[mode])}>
        {isDivertSign && (
          <Light color={lightColor} className={commonCISSignCSS.light} />
        )}
      </Board>
    </CISSign>
  );
};