import React from 'react';

import cx from 'classnames';

import css from './Sign.module.scss';

import { SignProps } from '../../Sign.types';

export const Sign = ({
  children,
  type = 'standalone',
  rotation = 'default',
  className
}: SignProps) => (
  <div className={cx(css.sign, css[type], css[rotation], className)}>
    {children}
  </div>
);
