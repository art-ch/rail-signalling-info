import React from 'react';

import cx from 'classnames';

import css from './SignWrapper.module.scss';
import { SignWrapperProps } from './SignWrapper.types';

export const SignWrapper = ({
  containerWidth = 'defaultWidth',
  animatedWrapperProps = { withAnimatedSigns: false },
  className,
  children
}: SignWrapperProps) => {
  const { withAnimatedSigns } = animatedWrapperProps;

  const animatedSignWrapper =
    withAnimatedSigns && 'additionalMargin' in animatedWrapperProps;

  let animatedSignWrapperClassName = '';

  if (animatedSignWrapper) {
    animatedSignWrapperClassName = cx(
      css.animatedSignWrapper,
      css[animatedWrapperProps.additionalMargin]
    );
  }

  return (
    <div
      className={cx(
        css.container,
        css[containerWidth],
        animatedSignWrapperClassName,
        className
      )}
    >
      {children}
    </div>
  );
};
