import React from 'react';

import cx from 'classnames';

import { Sign } from 'src/components/molecules/Sign';

import css from './CISSign.module.scss';
import { SignProps } from 'src/components/molecules/Sign/Sign.types';

export type CISSignProps = {
  children: React.ReactNode | React.ReactNode[];
} & Pick<SignProps, 'type' | 'rotation'>;

export const CISSign = ({
  children,
  type = 'standalone',
  rotation = 'default'
}: CISSignProps) => {
  return (
    <Sign className={cx(css.sign)} type={type} rotation={rotation}>
      {children}
    </Sign>
  );
};
