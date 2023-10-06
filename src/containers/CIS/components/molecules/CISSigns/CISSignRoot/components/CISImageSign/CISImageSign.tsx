import React from 'react';

import cx from 'classnames';

import { ImageSign } from 'src/components/molecules/Sign/components/ImageSign';

import { CISImageSignProps } from '../../CISSignRoot.types';

export const CISImageSign = ({
  children,
  className,
  animatedSignClassName
}: CISImageSignProps) => (
  <ImageSign className={cx(className, animatedSignClassName)}>
    {children}
  </ImageSign>
);
