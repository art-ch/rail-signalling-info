import React from 'react';

import cx from 'classnames';

import { Sign } from 'src/components/molecules/Sign';
import { CISSignProps } from './CISSign.types';

import css from './CISSign.module.scss';

export const CISSign = ({
  children,
  gripColor = 'default',
  type = 'standalone',
  rotation = 'default'
}: CISSignProps) => {
  return (
    <Sign
      className={cx(css.sign, css[`${gripColor}Grip`])}
      type={type}
      rotation={rotation}
    >
      {children}
    </Sign>
  );
};
