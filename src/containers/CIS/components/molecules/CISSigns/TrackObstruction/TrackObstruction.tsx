import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../CISSignRoot';
import commonCISSignCSS from '../CISSignRoot/CISSignRoot.module.scss';

import css from './TrackObstruction.module.scss';

export type TrackObstructionProps = { closed?: boolean };

export const TrackObstruction = ({ closed = false }: TrackObstructionProps) => {
  return (
    <CISSign pole="permanent">
      <div className={commonCISSignCSS.cap} />
      <Board className={cx(css.frame, commonCISSignCSS.frame)}>
        <div className={css.innerFrame}>
          <div className={cx(css.signifyingLine, { [css.closed]: closed })} />
        </div>
      </Board>
    </CISSign>
  );
};
