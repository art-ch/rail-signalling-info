import React from 'react';

import cx from 'classnames';

import { BoardProps } from './Board.types';

import css from './Board.module.scss';

export const Board = ({
  border = 'edge',
  children,
  className,
  innerFrameClassName
}: BoardProps) => {
  const staggeredBorder = border === 'edgeThickStaggered';

  if (staggeredBorder) {
    return (
      <div className={cx(css.board, css.border, className)}>
        <div className={cx(css.innerBorder, innerFrameClassName)}>
          {children}
        </div>
      </div>
    );
  }

  return <div className={cx(css.board, css.border, className)}>{children}</div>;
};
