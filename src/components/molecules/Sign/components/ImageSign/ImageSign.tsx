import React from 'react';

import Image from 'next/image';

import cx from 'classnames';

import css from './ImageSign.module.scss';
import { ImageSignProps } from '../../Sign.types';

export const ImageSign = ({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  ...imageProps
}: ImageSignProps) => (
  <div className={cx(css.imageSign, className)}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cx(css.image, imageClassName)}
      {...imageProps}
    />
  </div>
);
