import React from 'react';

import cx from 'classnames';

import css from './Sign.module.scss';

import { SignProps } from './Sign.types';

export const Sign = ({
  children,
  type = 'standalone',
  rotation = 'default',
  imageSign = false,
  className
}: SignProps) => {
  if (imageSign) {
    return <div className={cx(css.imageSign, className)}>Image Sign</div>;
  }

  return (
    <div className={cx(css.sign, css[type], css[rotation], className)}>
      {children}
    </div>
  );
};
