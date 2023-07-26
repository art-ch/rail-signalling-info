import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import css from './TrackObstruction.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export type TrackObstructionProps = { closed?: boolean };

export const TrackObstruction = ({ closed = false }: TrackObstructionProps) => {
  return (
    <div className={commonCISSignCSS.pole}>
      <div className={commonCISSignCSS.cap} />
      <Board className={cx(css.frame, commonCISSignCSS.frame)}>
        <div className={css.innerFrame}>
          <div className={cx(css.signifyingLine, { [css.closed]: closed })} />
        </div>
      </Board>
    </div>
  );
};
