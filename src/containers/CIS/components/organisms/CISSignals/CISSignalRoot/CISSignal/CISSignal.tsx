import React from 'react';

import { Signal, SignalProps } from 'src/components/organisms/Signal';
import { injectZoneSpecificSignalStyles } from 'src/utils/themeUtils';

import {
  CISSignalSignRenderer,
  CISSignalSignRendererProps
} from '../../../CISSignalSignRenderer';

import css from './CISSignal.module.scss';

export type CISSignalProps = {
  mainSignalProps: SignalProps;
  signalElementsUnderPlatesProps?: CISSignalSignRendererProps;
};

export const CISSignal = ({
  mainSignalProps,
  signalElementsUnderPlatesProps
}: CISSignalProps) => {
  const mainSignalPropsWithStyles = injectZoneSpecificSignalStyles({
    signalProps: mainSignalProps,
    css
  });

  const SignalElementsUnderPlates = () => (
    <CISSignalSignRenderer {...signalElementsUnderPlatesProps} />
  );

  return (
    <Signal
      {...mainSignalPropsWithStyles}
      ZoneSpecificSignalElementsUnderPlates={SignalElementsUnderPlates}
    />
  );
};
