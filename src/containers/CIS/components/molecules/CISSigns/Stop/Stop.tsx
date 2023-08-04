import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';
import { Plate } from 'src/components/molecules/Plate';

import css from './Stop.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export type StopProps = { nightTime?: boolean };

export const Stop = ({ nightTime = false }: StopProps) => {
  const tempSignPoleColor = nightTime ? 'special' : 'red';

  const poleClassNameList = cx(
    commonCISSignCSS.pole,
    commonCISSignCSS.tempSignPole,
    commonCISSignCSS[tempSignPoleColor]
  );

  const SignComponent = nightTime ? (
    <Plate lights={[{ color: 'red' }]} className={commonCISSignCSS.plate} />
  ) : (
    <Board
      border="edgeThickStaggered"
      className={css.board}
      innerFrameClassName={css.innerFrame}
    />
  );

  return <div className={poleClassNameList}>{SignComponent}</div>;
};
