import React from 'react';

import cx from 'classnames';

import {
  PermanentGradientPoleProps,
  TemporaryGradientPoleProps,
  GradientPoleProps
} from './GradientPole.types';

import { PropsWithChildren } from 'src/types';

import commonCISSignCSS from '../../CISSign.module.scss';

export const GradientPole = ({ temporary, ...props }: GradientPoleProps) => {
  if (temporary) {
    const { poleGradientColor = 'black', children } =
      props as PropsWithChildren<TemporaryGradientPoleProps>;

    return (
      <div
        className={cx(
          commonCISSignCSS.pole,
          commonCISSignCSS.tempSignPole,
          commonCISSignCSS[poleGradientColor]
        )}
      >
        {children}
      </div>
    );
  }

  const { children } = props as PropsWithChildren<PermanentGradientPoleProps>;

  return <div className={commonCISSignCSS.pole}>{children}</div>;
};
