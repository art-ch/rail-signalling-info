import React from 'react';

import cx from 'classnames';

import { UIComponent } from 'src/types';

import css from './Board.module.scss';

export type BoardProps = {
  children?: React.ReactNode | React.ReactNode[];
} & UIComponent;

export const Board = ({ children, className }: BoardProps) => (
  <div className={cx(css.board, className)}>{children}</div>
);
