import cx from 'classnames';

import { Plate, PlateProps } from '../../molecules/Plate';

import { UIComponent } from '../../../types';

import css from './Signal.module.scss';
import { FunctionComponent } from 'react';

export type SignalProps = {
  plates: PlateProps[];
  ZoneSpecificSignalElementsUnderPlates?: FunctionComponent;
} & UIComponent;

export const Signal = ({
  plates,
  ZoneSpecificSignalElementsUnderPlates,
  className
}: SignalProps) => {
  return (
    <div className={cx(css.signal, className)}>
      {plates.map((plate, idx) => (
        <Plate key={idx} {...plate} />
      ))}
      {ZoneSpecificSignalElementsUnderPlates && (
        <ZoneSpecificSignalElementsUnderPlates />
      )}
    </div>
  );
};
