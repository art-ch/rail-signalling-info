import cx from 'classnames';

import { Light, LightProps } from '../../atoms/Light';

import { UIComponent } from '../../../types';

import css from './Plate.module.scss';

export type PlateProps = {
  dwarfSignal?: boolean;
  lights: LightProps[];
} & UIComponent;

export const Plate = ({ dwarfSignal, lights, className }: PlateProps) => {
  const coreClassName = {
    [css.plate]: !dwarfSignal,
    [css.dwarfSignalPlate]: dwarfSignal
  };

  return (
    <div className={cx(coreClassName, className)}>
      {lights.map((light, idx) => (
        <Light key={idx} {...light} />
      ))}
    </div>
  );
};
