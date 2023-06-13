import React, { FunctionComponent } from 'react';

import cx from 'classnames';

import {
  DwarfSignal,
  DwarfSignalProps
} from 'src/components/organisms/DwarfSignal';
import { UIComponent } from 'src/types';

import { injectZoneSpecificSignalStyles } from 'src/utils/themeUtils';

import css from './CISDwarfSignal.module.scss';

export type CISDwarfSignalProps = {
  mainDwarfSignalProps: DwarfSignalProps;
  SignalElementsOnHorizontalSupport?: FunctionComponent;
} & UIComponent<{ additionalPlatesContainerClassName?: string }>;

export const CISDwarfSignal = ({
  mainDwarfSignalProps,
  additionalPlatesContainerClassName,
  SignalElementsOnHorizontalSupport
}: CISDwarfSignalProps) => {
  const DEFAULT_AMOUNT_OF_VERTICAL_SUPPORTS = 2;

  const amountOfVerticalSupports =
    mainDwarfSignalProps.amountOfVerticalSupports ||
    DEFAULT_AMOUNT_OF_VERTICAL_SUPPORTS;

  const dwarfSignalPropsWithStyles = injectZoneSpecificSignalStyles({
    signalProps: mainDwarfSignalProps,
    css
  });

  return (
    <DwarfSignal
      {...dwarfSignalPropsWithStyles}
      ZoneSpecificSignalElementsOnHorizontalSupport={
        SignalElementsOnHorizontalSupport
      }
      platesContainerClassName={cx(
        css.platesContainer,
        additionalPlatesContainerClassName
      )}
      amountOfVerticalSupports={amountOfVerticalSupports}
    />
  );
};
