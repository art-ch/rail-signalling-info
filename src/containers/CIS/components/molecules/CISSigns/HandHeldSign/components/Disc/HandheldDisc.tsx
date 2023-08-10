import React from 'react';
import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../../../CISSignRoot';

import css from './HandheldDisc.module.scss';

export const HandheldDisc = () => (
  <CISSign type="handheld" grip="default">
    <Board
      border="edgeThickStaggered"
      className={css.board}
      innerFrameClassName={css.innerFrame}
    />
  </CISSign>
);
