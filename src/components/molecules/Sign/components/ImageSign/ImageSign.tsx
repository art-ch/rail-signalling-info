import React from 'react';

import Image from 'next/image';

import cx from 'classnames';

import css from './ImageSign.module.scss';
import { ImageSignProps } from '../../Sign.types';
import { getAnimatedSignClassName } from '../../Sign.utils';

export const ImageSign = ({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  ...imageProps
}: ImageSignProps) => {
  const animatedSignClassName = getAnimatedSignClassName(imageProps);

  return (
    <div className={cx(css.imageSign, className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cx(css.image, animatedSignClassName, imageClassName)}
        {...imageProps}
      />
    </div>
  );
};
