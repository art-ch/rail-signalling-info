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
