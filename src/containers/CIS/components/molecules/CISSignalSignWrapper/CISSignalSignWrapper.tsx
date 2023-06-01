import React from 'react';

export type CISSignalSignWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const CISSignalSignWrapper = ({
  children
}: CISSignalSignWrapperProps) => <div className="container">{children}</div>;
