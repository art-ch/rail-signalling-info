import React from 'react';

import { getAnimatedSignClassName } from 'src/components/molecules/Sign';

import {
  CISImageSignProps,
  CISSignProps,
  CISSignRootProps
} from './CISSignRoot.types';
import { CISImageSign } from './components/CISImageSign';
import { CISSign } from './components/CISSign';

import css from './CISSignRoot.module.scss';

const CISSignRoot = ({ imageSign = false, ...props }: CISSignRootProps) => {
  const animatedSignClassName = getAnimatedSignClassName({ props, css });

  if (imageSign) {
    return (
      <CISImageSign
        {...(props as CISImageSignProps)}
        animatedSignClassName={animatedSignClassName}
      />
    );
  }

  return (
    <CISSign
      {...(props as CISSignProps)}
      animatedSignClassName={animatedSignClassName}
    />
  );
};

export { CISSignRoot as CISSign };
