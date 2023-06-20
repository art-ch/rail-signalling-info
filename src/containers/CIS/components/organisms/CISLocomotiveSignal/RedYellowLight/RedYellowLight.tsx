import React from 'react';

import cx from 'classnames';

import css from './RedYellowLight.module.scss';

export type RedYellowLightProps = { active: string };

export const RedYellowLight = ({ active }: RedYellowLightProps) => {
  return (
    <div className={css.light}>
      <div
        className={cx(css.piece, css.upperPiece, { [css.yellow]: active })}
      />
      <div className={css.divider} />
      <div className={cx(css.piece, css.lowerPiece, { [css.red]: active })} />
    </div>
  );
};
