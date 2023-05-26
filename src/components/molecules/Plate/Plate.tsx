import cx from 'classnames';

import { Light, LightProps } from '../../atoms/Light';

import { UIComponent } from '../../../types';

import css from './Plate.module.scss';

export type PlateProps = {
  lights: LightProps[];
} & UIComponent;

export const Plate = ({ lights, className }: PlateProps) => (
  <div className={cx(css.plate, className)}>
    {lights.map((light, idx) => (
      <Light key={idx} {...light} />
    ))}
  </div>
);
