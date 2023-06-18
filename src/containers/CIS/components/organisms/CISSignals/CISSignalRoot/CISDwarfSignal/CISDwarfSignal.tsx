import React from 'react';

import cx from 'classnames';

import {
  DwarfSignal,
  DwarfSignalProps
} from 'src/components/organisms/DwarfSignal';
import { UIComponent } from 'src/types';

import { injectZoneSpecificSignalStyles } from 'src/utils/themeUtils';

import css from './CISDwarfSignal.module.scss';
import {
  CISSignalSignRenderer,
  CISSignalSignRendererProps
} from '../../../CISSignalSignRenderer';
import { formatCISDwarfSignalSignRendererProps } from './CISDwarfSignal.utils';

export type CISDwarfSignalProps = {
  mainDwarfSignalProps: DwarfSignalProps;
  signalElementsOnHorizontalSupportProps?: CISSignalSignRendererProps;
} & UIComponent<{ additionalPlatesContainerClassName?: string }>;

export const CISDwarfSignal = ({
  mainDwarfSignalProps,
  additionalPlatesContainerClassName,
  signalElementsOnHorizontalSupportProps
}: CISDwarfSignalProps) => {
  const DEFAULT_AMOUNT_OF_VERTICAL_SUPPORTS = 2;

  const amountOfVerticalSupports =
    mainDwarfSignalProps.amountOfVerticalSupports ||
    DEFAULT_AMOUNT_OF_VERTICAL_SUPPORTS;

  const dwarfSignalPropsWithStyles = injectZoneSpecificSignalStyles({
    signalProps: mainDwarfSignalProps,
    css
  });

  const cisSignalSignRendererProps = formatCISDwarfSignalSignRendererProps(
    signalElementsOnHorizontalSupportProps
  );

  const ElementsOnHorizontalSupport = () => (
    <CISSignalSignRenderer {...cisSignalSignRendererProps} />
  );

  return (
    <DwarfSignal
      {...dwarfSignalPropsWithStyles}
      ElementsOnHorizontalSupport={ElementsOnHorizontalSupport}
      platesContainerClassName={cx(
        css.platesContainer,
        additionalPlatesContainerClassName
      )}
      amountOfVerticalSupports={amountOfVerticalSupports}
    />
  );
};
