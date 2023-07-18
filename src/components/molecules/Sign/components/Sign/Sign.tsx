import React from 'react';

import cx from 'classnames';

import css from './Sign.module.scss';

import { SignProps } from '../../Sign.types';

export const Sign = ({
  children,
  type = 'standalone',
  rotation = 'default',
  atDistance = false,
  className
}: SignProps) => (
  <div
    className={cx(
      css.sign,
      css[type],
      css[rotation],
      { [css.atDistance]: atDistance },
      className
    )}
  >
    {children}
  </div>
);
