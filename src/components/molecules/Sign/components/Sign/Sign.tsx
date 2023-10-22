import React from 'react';

import cx from 'classnames';

import { SignProps } from '../../Sign.types';

import css from './Sign.module.scss';

export const Sign = ({
  children,
  type = 'standalone',
  rotation = 'default',
  atDistance = false,
  className
}: SignProps) => {
  const classNameList = cx(
    css.sign,
    css[type],
    css[rotation],
    { [css.atDistance]: atDistance },
    className
  );

  return <div className={classNameList}>{children}</div>;
};
