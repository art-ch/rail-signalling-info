import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../CISSignRoot';

import { SlowDownProps } from './SlowDown.types';

import css from './SlowDown.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSignRoot.module.scss';

export const SlowDown = ({ temporary = false, mainColor }: SlowDownProps) => {
  const pole = temporary ? 'temporary' : 'permanent';
  const poleGradientColor = temporary ? mainColor : undefined;

  return (
    <CISSign pole={pole} poleGradientColor={poleGradientColor}>
      <Board
        border="edgeThickStaggered"
        rounded={!temporary}
        className={cx(css.frame, commonCISSignCSS.frame)}
        innerFrameClassName={cx(
          css.innerFrame,
          commonCISSignCSS.coloredFrame,
          commonCISSignCSS[mainColor]
        )}
      />
    </CISSign>
  );
};
