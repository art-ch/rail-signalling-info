import React from 'react';

import { Board } from 'src/components/atoms/Board';
import { Plate } from 'src/components/molecules/Plate';

import { CISSign } from '../CISSignRoot';

import css from './Stop.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSignRoot.module.scss';

export type StopProps = { nightTime?: boolean };

export const Stop = ({ nightTime = false }: StopProps) => {
  const poleGradientColor = nightTime ? 'special' : 'red';

  const SignComponent = nightTime ? (
    <Plate lights={[{ color: 'red' }]} className={commonCISSignCSS.plate} />
  ) : (
    <Board
      border="edgeThickStaggered"
      className={css.board}
      innerFrameClassName={css.innerFrame}
    />
  );

  return (
    <CISSign pole="temporary" poleGradientColor={poleGradientColor}>
      {SignComponent}
    </CISSign>
  );
};
