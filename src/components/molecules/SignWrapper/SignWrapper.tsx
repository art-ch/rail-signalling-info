import React from 'react';

import css from './SignWrapper.module.scss';

export type SignWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const SignWrapper = ({ children }: SignWrapperProps) => {
  return <div className={css.container}>{children}</div>;
};
