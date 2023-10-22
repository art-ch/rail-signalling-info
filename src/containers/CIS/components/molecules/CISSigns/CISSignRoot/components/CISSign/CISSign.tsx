import React from 'react';

import cx from 'classnames';

import { Sign } from 'src/components/molecules/Sign';

import { CISSignProps } from '../../CISSignRoot.types';

import css from './CISSign.module.scss';

export const CISSign = (props: CISSignProps) => {
  const {
    grip,
    pole,
    poleGradientColor,
    className,
    animatedSignClassName,
    children
  } = props;

  const gripClassNameList = grip && css[`${grip}Grip`];

  const permanentPoleClassList = pole === 'permanent' && css.pole;

  const tempPoleClassList =
    pole === 'temporary' &&
    poleGradientColor &&
    cx(css.tempSignPole, css[poleGradientColor ?? 'black']);

  const poleClassNameList =
    pole && (permanentPoleClassList || tempPoleClassList);

  return (
    <Sign
      className={cx(
        css.sign,
        gripClassNameList,
        poleClassNameList,
        animatedSignClassName,
        className
      )}
      {...props}
    >
      {children}
    </Sign>
  );
};
