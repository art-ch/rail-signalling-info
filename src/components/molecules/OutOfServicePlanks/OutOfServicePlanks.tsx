import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import css from './OutOfServicePlanks.module.scss';

export const OutOfServicePlanks = () => {
  const AMOUNT_OF_PLANKS = 2;

  return (
    <div className={css.container}>
      {Array.from({ length: AMOUNT_OF_PLANKS }).map((_, id) => {
        const classNumberFromID = id + 1;

        return (
          <Board
            key={id}
            className={cx(css.plank, css[`plank${classNumberFromID}`])}
          />
        );
      })}
    </div>
  );
};
