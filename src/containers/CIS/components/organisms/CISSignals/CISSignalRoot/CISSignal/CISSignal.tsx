import React from 'react';

import { Signal, SignalProps } from 'src/components/organisms/Signal';
import { injectZoneSpecificSignalStyles } from 'src/utils/themeUtils';

import css from './CISSignal.module.scss';

export const CISSignal = (signalProps: SignalProps) => {
  const signalPropsWithStyles = injectZoneSpecificSignalStyles({
    signalProps,
    css
  });

  return <Signal {...signalPropsWithStyles} />;
};
