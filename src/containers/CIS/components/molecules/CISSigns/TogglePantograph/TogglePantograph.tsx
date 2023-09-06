import React from 'react';

import cx from 'classnames';

import { CISSign } from '../CISSignRoot';

import { Board } from 'src/components/atoms/Board';

import { SignType } from 'src/components/molecules/Sign/Sign.types';

import css from './TogglePantograph.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export type TogglePantographProps = {
  type?: SignType;
  doubled?: boolean;
  turnedOn?: boolean;
  raise?: boolean;
};

export const TogglePantograph = ({
  type = 'onCatenaryPole',
  turnedOn = false,
  doubled = false,
  raise = false
}: TogglePantographProps) => {
  const temporarySign = type === 'standalone';
  const temporarySignClassName = {
    [css.temporary]: temporarySign
  };

  const pole = temporarySign ? 'temporary' : undefined;

  const renderSignBoards = () => {
    const boardsAmount = doubled ? 2 : 1;
    const boards = Array.from({ length: boardsAmount });

    return boards.map((_, id) => (
      <Board
        border="edgeThickStaggered"
        className={cx(
          css.frame,
          commonCISSignCSS.frame,
          commonCISSignCSS.diamondFrame,
          temporarySignClassName
        )}
        innerFrameClassName={cx(css.innerFrame, temporarySignClassName)}
        key={id}
      >
        <div
          className={cx(css.signContent, {
            [css.turnedOn]: turnedOn,
            [css.raise]: raise
          })}
        />
      </Board>
    ));
  };

  return (
    <CISSign pole={pole} type={type}>
      {renderSignBoards()}
    </CISSign>
  );
};
