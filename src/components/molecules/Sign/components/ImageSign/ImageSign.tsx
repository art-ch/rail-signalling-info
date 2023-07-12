import React from 'react';

import Image from 'next/image';

import cx from 'classnames';

import css from './ImageSign.module.scss';
import { ImageSignProps } from '../../Sign.types';

export const ImageSign = ({ src, alt, className }: ImageSignProps) => (
  <div className={cx(css.imageSign, className)}>
    <Image src={src} alt={alt} className={css.image} />
  </div>
);
