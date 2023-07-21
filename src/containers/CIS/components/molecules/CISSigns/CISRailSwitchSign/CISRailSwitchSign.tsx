import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';
import { Light } from 'src/components/atoms/Light';
import { CISSign } from '../CISSignRoot';

import { CISRailSwitchSignProps } from './CISRailSwitchSign.types';

import css from './CISRailSwitchSign.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';
import { useCISSignalContext } from 'src/containers/CIS/context';

export const CISRailSwitchSign = ({
  mode,
  lightColor = 'turnedOff',
  atDistance = false
}: CISRailSwitchSignProps) => {
  const { content } = useCISSignalContext();

  const isDivertSign = mode === 'divert';
  const isDivertAnalogSign = mode === 'divertAnalog';

  if (isDivertAnalogSign) {
    const divertAnalogSign = content.imageSigns.find((imageSign) =>
      imageSign.title.includes('Divert Analog Sign')
    );

    return (
      <CISSign
        imageSign
        src={divertAnalogSign?.file.url || ''}
        alt={'divert analog sign'}
        width={divertAnalogSign?.file.details.image?.width}
        height={divertAnalogSign?.file.details.image?.height}
      />
    );
  }

  return (
    <CISSign gripColor="black" type="dwarfStandalone" atDistance={atDistance}>
      <>
        <div className={commonCISSignCSS.cap} />
        <Board className={cx(commonCISSignCSS.frame, css.frame, css[mode])}>
          {isDivertSign && (
            <Light color={lightColor} className={commonCISSignCSS.light} />
          )}
        </Board>
      </>
    </CISSign>
  );
};
