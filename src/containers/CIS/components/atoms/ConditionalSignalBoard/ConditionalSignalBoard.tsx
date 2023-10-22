import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import css from './ConditionalSignalBoard.module.scss';

export type ConditionalSignalBoardProps = { aspect: string };

export const ConditionalSignalBoard = ({
  aspect
}: ConditionalSignalBoardProps) => {
  if (aspect === 'conditional') {
    return (
      <div className={css.container}>
        <div className={css.verticalSupport}>
          <Board className={css.tPlate}>
            <div className={css.tContainer}>
              <div className={cx(css.stroke, css.horizontalStroke)}>
                <div className={css.reflectiveElement} />
                <div className={css.reflectiveElement} />
                <div className={css.reflectiveElement} />
              </div>
              <div className={cx(css.stroke, css.verticalStroke)}>
                <div className={css.reflectiveElement} />
                <div className={css.reflectiveElement} />
              </div>
            </div>
          </Board>
        </div>
      </div>
    );
  }

  return null;
};
