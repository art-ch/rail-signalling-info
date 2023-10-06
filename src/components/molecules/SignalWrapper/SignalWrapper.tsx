import React from 'react';

import cx from 'classnames';

import { UIComponent } from 'src/types';

import css from './SignalWrapper.module.scss';

export type SignalWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
} & UIComponent;

export const SignalWrapper = ({ children, className }: SignalWrapperProps) => {
  return <div className={cx(css.container, className)}>{children}</div>;
};
