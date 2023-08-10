import React from 'react';

import cx from 'classnames';

import css from './DangerousPlaceBoundaries.module.scss';
import { CISSign } from '../CISSignRoot';

export type DangerousPlaceBoundariesProps = {
  temporary?: boolean;
  ending?: boolean;
};

export const DangerousPlaceBoundaries = ({
  temporary = false,
  ending = false
}: DangerousPlaceBoundariesProps) => {
  const pole = temporary ? 'temporary' : 'permanent';
  const poleGradientColor = temporary ? 'black' : undefined;

  return (
    <CISSign pole={pole} poleGradientColor={poleGradientColor}>
      <div className={css.outerPolkaDot}>
        <div className={css.innerPolkaDotContainer}>
          <div className={cx(css.innerPolkaDot, { [css.ending]: ending })}>
            {Array.from({ length: 3 }).map((_, id) => (
              <div key={id} className={css.dot} />
            ))}
          </div>
        </div>
      </div>
    </CISSign>
  );
};
