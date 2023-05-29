import React from 'react';

import {
  DwarfSignal,
  DwarfSignalProps
} from 'src/components/organisms/DwarfSignal';

import { injectZoneSpecificSignalStyles } from 'src/utils/themeUtils';

import css from './CISDwarfSignal.module.scss';

export const CISDwarfSignal = (dwarfSignalProps: DwarfSignalProps) => {
  const DEFAULT_AMOUNT_OF_VERTICAL_SUPPORTS = 2;

  const amountOfVerticalSupports =
    dwarfSignalProps.amountOfVerticalSupports ||
    DEFAULT_AMOUNT_OF_VERTICAL_SUPPORTS;

  const dwarfSignalPropsWithStyles = injectZoneSpecificSignalStyles({
    signalProps: dwarfSignalProps,
    css
  });

  return (
    <DwarfSignal
      {...dwarfSignalPropsWithStyles}
      platesContainerClassName={css.platesContainer}
      amountOfVerticalSupports={amountOfVerticalSupports}
    />
  );
};
