import React from 'react';

import cx from 'classnames';

import css from './Sign.module.scss';

import { SignProps } from '../../Sign.types';
import { getAnimatedSignClassName } from '../../Sign.utils';

export const Sign = ({
  children,
  type = 'standalone',
  rotation = 'default',
  atDistance = false,
  className,
  ...props
}: SignProps) => {
  let animatedSignClassName = getAnimatedSignClassName(props);

  const classNameList = cx(
    css.sign,
    css[type],
    css[rotation],
    { [css.atDistance]: atDistance },
    animatedSignClassName,
    className
  );

  return <div className={classNameList}>{children}</div>;
};
