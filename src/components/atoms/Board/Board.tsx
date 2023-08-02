import React from 'react';

import cx from 'classnames';

import { BoardProps } from './Board.types';

import css from './Board.module.scss';

export const Board = ({
  border = 'edge',
  rounded = false,
  children,
  className,
  innerFrameClassName
}: BoardProps) => {
  const staggeredBorder = border === 'edgeThickStaggered';

  const roundedBorder = { [css.rounded]: rounded };

  if (staggeredBorder) {
    return (
      <div
        className={cx(
          css.board,
          css.border,
          css.outerBorder,
          roundedBorder,
          className
        )}
      >
        <div
          className={cx(css.innerBorder, roundedBorder, innerFrameClassName)}
        >
          {children}
        </div>
      </div>
    );
  }

  return <div className={cx(css.board, css.border, className)}>{children}</div>;
};
