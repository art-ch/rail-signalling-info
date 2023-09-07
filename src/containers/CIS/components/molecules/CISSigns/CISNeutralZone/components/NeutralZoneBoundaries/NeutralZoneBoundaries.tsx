import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../../../CISSignRoot';

import { NeutralZoneBoundariesProps } from '../../CISNeutralZone.types';

import css from './NeutralZoneBoundaries.module.scss';

export const NeutralZoneBoundaries = ({
  ending = false
}: NeutralZoneBoundariesProps) => {
  return (
    <CISSign type="onCatenaryPole" atDistance={ending}>
      <Board className={css.frame}>
        <div className={cx(css.verticalLine, { [css.ending]: ending })} />
      </Board>
    </CISSign>
  );
};
