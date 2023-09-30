import React from 'react';
import { ImageSign } from 'src/components/molecules/Sign/components/ImageSign';
import { CISImageSignProps } from '../../CISSignRoot.types';

export const CISImageSign = ({
  children,
  animatedSignClassName
}: CISImageSignProps) => (
  <ImageSign className={animatedSignClassName}>{children}</ImageSign>
);
