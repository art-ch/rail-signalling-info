import React from 'react';

import cx from 'classnames';

import { Sign } from 'src/components/molecules/Sign/components/Sign';
import { ImageSign } from 'src/components/molecules/Sign/components/ImageSign';

import { CISSignDiscriminantProps, CISSignProps } from './CISSign.types';
import {
  ImageSignProps,
  SignProps
} from 'src/components/molecules/Sign/Sign.types';

import css from './CISSign.module.scss';

export const CISSign = ({
  imageSign = false,
  ...props
}: CISSignDiscriminantProps) => {
  if (imageSign) {
    return <ImageSign {...(props as ImageSignProps)} />;
  }

  const { children, gripColor = 'default' } = props as CISSignProps;

  return (
    <Sign className={cx(css.sign, css[`${gripColor}Grip`])} {...props}>
      {children}
    </Sign>
  );
};
