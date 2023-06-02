import React from 'react';

import css from './CISSignalSignWrapper.module.scss';

export type CISSignalSignWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const CISSignalSignWrapper = ({
  children
}: CISSignalSignWrapperProps) => (
  <div className={css.container}>{children}</div>
);
