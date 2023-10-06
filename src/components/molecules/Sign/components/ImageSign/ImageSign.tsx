import React, { Children, cloneElement } from 'react';

import Image from 'next/image';

import cx from 'classnames';

import css from './ImageSign.module.scss';
import { ImageSignProps } from '../../Sign.types';
import { isInstanceOfComponentWithinOptionalDiv } from 'src/types';

export const ImageSign = ({
  children,
  className,
  imageClassName
}: ImageSignProps) => {
  const correctImageSignChildren = isInstanceOfComponentWithinOptionalDiv({
    elements: children,
    component: Image
  });

  if (!correctImageSignChildren) {
    throw new Error(
      'correct children are <Image /> or <div><Image /></div> where <Image /> is component from next/image'
    );
  }

  const imagesWithClassName = Children.map(children, (child) =>
    cloneElement(child, { className: cx(css.image, imageClassName) })
  );

  return (
    <div className={cx(css.imageSign, className)}>{imagesWithClassName}</div>
  );
};
