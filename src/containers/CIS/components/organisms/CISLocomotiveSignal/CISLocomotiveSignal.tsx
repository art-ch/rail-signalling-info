import React from 'react';

import cx from 'classnames';

import { Light, LightColor } from 'src/components/atoms/Light';

import { RedYellowLight } from './RedYellowLight';

import { SignalLights, UIComponent } from 'src/types';

import css from './CISLocomotiveSignal.module.scss';

export type CISLocomotiveSignalLights = SignalLights | 'active';

export type CISLocomotiveSignalProps = {
  lights: CISLocomotiveSignalLights;
} & UIComponent;

export const CISLocomotiveSignal = ({
  lights,
  className
}: CISLocomotiveSignalProps) => {
  const generateLights = () =>
    Object.values(lights).map((color, id) => {
      if (id === 2) {
        return <RedYellowLight key={id} active={color} />;
      }

      return (
        <Light
          key={id}
          className={cx({
            [css.moonWhite]: color === 'moonWhite',
            [css.yellow]: color === 'yellow'
          })}
          color={(color as LightColor) || 'turnedOff'}
          size="small"
        />
      );
    });

  return (
    <div className={cx(css.container, className)}>
      <div className={css.upperFrame}></div>
      <div className={css.box}>
        <div className={cx(css.plate, css.plate1)}>{generateLights()}</div>
        <div className={css.middleFrame} />
        <div className={cx(css.plate, css.plate2)}>{generateLights()}</div>
      </div>
    </div>
  );
};
