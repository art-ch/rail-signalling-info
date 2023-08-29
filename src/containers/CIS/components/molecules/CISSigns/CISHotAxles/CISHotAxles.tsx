import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';
import { CISSign } from '../CISSignRoot';

import css from './CISHotAxles.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export type CISHotAxlesProps = { turnedOn?: boolean };

export const CISHotAxles = ({ turnedOn = false }: CISHotAxlesProps) => {
  const turnedOnSign = {
    [css.turnedOnSign]: turnedOn
  };

  return (
    <CISSign type="onCatenaryPole">
      <Board
        className={cx(css.frame, commonCISSignCSS.frame, css.catenaryPoleSign)}
      >
        <div className={cx(css.coloredFrame, commonCISSignCSS.coloredFrame)}>
          <div
            className={cx(css.vLetterLeg, css.vLetterLeg_left, turnedOnSign)}
          />
          <div
            className={cx(css.vLetterLeg, css.vLetterLeg_right, turnedOnSign)}
          />
          <div className={cx(css.vLetterLeg_bottom, turnedOnSign)} />
        </div>
      </Board>
    </CISSign>
  );
};
