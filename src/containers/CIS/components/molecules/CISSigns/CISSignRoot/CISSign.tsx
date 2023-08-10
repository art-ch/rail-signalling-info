import React from 'react';

import cx from 'classnames';

import { Sign } from 'src/components/molecules/Sign/components/Sign';
import { ImageSign } from 'src/components/molecules/Sign/components/ImageSign';

import { CISSignDiscriminantProps, CISSignProps } from './CISSign.types';
import { ImageSignProps } from 'src/components/molecules/Sign/Sign.types';

import css from './CISSign.module.scss';

export const CISSign = ({
  imageSign = false,
  ...props
}: CISSignDiscriminantProps) => {
  if (imageSign) {
    return <ImageSign {...(props as ImageSignProps)} />;
  }

  const { grip, pole, poleGradientColor, children } = props as CISSignProps;

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
      className={cx(css.sign, gripClassNameList, poleClassNameList)}
      {...props}
    >
      {children}
    </Sign>
  );
};
