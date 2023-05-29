import React from 'react';

import css from './SignalWrapper.module.scss';

export type SignalWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const SignalWrapper = ({ children }: SignalWrapperProps) => {
  return <div className={css.signalWrapper}>{children}</div>;
};
