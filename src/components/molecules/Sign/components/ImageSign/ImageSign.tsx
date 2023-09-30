import React, { Children, cloneElement } from 'react';

import Image from 'next/image';

import cx from 'classnames';

import css from './ImageSign.module.scss';
import { ImageSignProps } from '../../Sign.types';
import { isInstanceOfComponent } from 'src/types/typeGuards';

export const ImageSign = ({
  children,
  className,
  imageClassName
}: ImageSignProps) => {
  if (!isInstanceOfComponent(children, Image)) {
    throw new Error(
      '<Image /> from next/image is the only valid <ImageSign /> child'
    );
  }

  const imageWithClassName = Children.map(children, (child) =>
    cloneElement(child, { className: cx(css.image, imageClassName) })
  );

  return (
    <div className={cx(css.imageSign, className)}>{imageWithClassName}</div>
  );
};
