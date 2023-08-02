import React from 'react';

import cx from 'classnames';

import {
  SlowDownPermanentProps,
  SlowDownPoleProps,
  SlowDownTemporaryProps
} from './SlowDown.types';

import { PropsWithChildren } from 'src/types';

import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export const SlowDownPole = ({ temporary, ...props }: SlowDownPoleProps) => {
  if (temporary) {
    const { poleGradientColor, children } =
      props as PropsWithChildren<SlowDownTemporaryProps>;

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

  const { children } = props as PropsWithChildren<SlowDownPermanentProps>;

  return <div className={commonCISSignCSS.pole}>{children}</div>;
};
