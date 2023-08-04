import React from 'react';

import cx from 'classnames';

import { GradientPole } from '../CISSignRoot/components/GradientPole/GradientPole';

import css from './DangerousPlaceBoundaries.module.scss';

export type DangerousPlaceBoundariesProps = {
  temporary?: boolean;
  ending?: boolean;
};

export const DangerousPlaceBoundaries = ({
  temporary = false,
  ending = false
}: DangerousPlaceBoundariesProps) => {
  return (
    <GradientPole temporary={temporary}>
      <div className={css.outerPolkaDot}>
        <div className={css.innerPolkaDotContainer}>
          <div className={cx(css.innerPolkaDot, { [css.ending]: ending })}>
            {Array.from({ length: 3 }).map((_, id) => (
              <div key={id} className={css.dot} />
            ))}
          </div>
        </div>
      </div>
    </GradientPole>
  );
};
