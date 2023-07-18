import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';
import { Light } from 'src/components/atoms/Light';
import { CISSign } from '../CISSignRoot';

import { CISRailSwitchSignProps } from './CISRailSwitchSign.types';

import css from './CISRailSwitchSign.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export const CISRailSwitchSign = ({
  mode,
  lightColor = 'turnedOff',
  atDistance = false
}: CISRailSwitchSignProps) => {
  const divertSign = mode === 'divert';
  const divertAnalogSign = mode === 'divertAnalog';

  return (
    <CISSign gripColor="black" type="dwarfStandalone" atDistance={atDistance}>
      <>
        <div className={commonCISSignCSS.cap} />
        <Board className={cx(commonCISSignCSS.frame, css.frame, css[mode])}>
          {divertSign && (
            <Light color={lightColor} className={commonCISSignCSS.light} />
          )}
          {divertAnalogSign && <div className={css.divertAnalog__DarkPart} />}
        </Board>
      </>
    </CISSign>
  );
};
