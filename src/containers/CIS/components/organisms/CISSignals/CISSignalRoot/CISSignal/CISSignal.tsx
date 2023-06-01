import React, { FunctionComponent } from 'react';

import { Signal, SignalProps } from 'src/components/organisms/Signal';
import { injectZoneSpecificSignalStyles } from 'src/utils/themeUtils';

import css from './CISSignal.module.scss';

export type CISSignalProps = {
  mainSignalProps: SignalProps;
  SignalElementsUnderPlates?: FunctionComponent;
};

export const CISSignal = ({
  mainSignalProps,
  SignalElementsUnderPlates
}: CISSignalProps) => {
  const mainSignalPropsWithStyles = injectZoneSpecificSignalStyles({
    signalProps: mainSignalProps,
    css
  });

  return (
    <Signal
      {...mainSignalPropsWithStyles}
      ZoneSpecificSignalElementsUnderPlates={SignalElementsUnderPlates}
    />
  );
};
