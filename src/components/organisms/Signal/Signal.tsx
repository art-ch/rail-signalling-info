import cx from 'classnames';

import { Plate, PlateProps } from '../../molecules/Plate';

import { UIComponent } from '../../../types';

import css from './Signal.module.scss';

export type SignalProps = {
  plates: PlateProps[];
} & UIComponent;

export const Signal = ({ plates, className }: SignalProps) => {
  return (
    <div className={cx(css.signal, className)}>
      {plates.map((plate, idx) => (
        <Plate key={idx} {...plate} />
      ))}
    </div>
  );
};
