import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../CISSignRoot';

import css from './ToggleCurrent.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSignRoot.module.scss';

export type ToggleCurrentProps = { turnOn?: boolean; doubled?: boolean };

export const ToggleCurrent = ({
  turnOn = false,
  doubled = false
}: ToggleCurrentProps) => {
  const renderSignBoards = () => {
    const boardsAmount = doubled ? 2 : 1;
    const boards = Array.from({ length: boardsAmount });
    const turnCurrentOnSignClassName = { [css.turnOn]: turnOn };

    return boards.map((_, id) => (
      <Board
        border="edgeThickStaggered"
        className={cx(
          css.frame,
          commonCISSignCSS.frame,
          commonCISSignCSS.diamondFrame
        )}
        innerFrameClassName={css.innerFrame}
        key={id}
      >
        <div className={css.signContent}>
          <div className={css.upperElements}>
            <div className={cx(css.upperElement, turnCurrentOnSignClassName)} />
            <div className={cx(css.upperElement, turnCurrentOnSignClassName)} />
          </div>
          <div className={cx(css.lowerElement, turnCurrentOnSignClassName)} />
        </div>
      </Board>
    ));
  };

  return <CISSign type="onCatenaryPole">{renderSignBoards()}</CISSign>;
};
