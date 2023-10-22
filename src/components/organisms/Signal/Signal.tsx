import { FunctionComponent } from 'react';

import cx from 'classnames';

import { UIComponent } from '../../../types';
import { Plate, PlateProps } from '../../molecules/Plate';

import css from './Signal.module.scss';

export type SignalProps = {
  plates: PlateProps[];
  ElementsUnderPlates?: FunctionComponent;
} & UIComponent;

export const Signal = ({
  plates,
  ElementsUnderPlates,
  className
}: SignalProps) => {
  return (
    <div className={cx(css.signal, className)}>
      {plates.map((plate, idx) => (
        <Plate key={idx} {...plate} />
      ))}
      {ElementsUnderPlates && <ElementsUnderPlates />}
    </div>
  );
};
