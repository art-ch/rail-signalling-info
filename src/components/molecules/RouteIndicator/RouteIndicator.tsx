import React from 'react';

import cx from 'classnames';

import { Light, LightColor } from 'src/components/atoms/Light';

import { UIComponent } from 'src/types';

import { BinaryMatrix } from 'src/types/miscelaneousTypes';

import css from './RouteIndicator.module.scss';

export type RouteIndicatorLightMatrix = BinaryMatrix;

export type RouteIndicatorProps = {
  lightMatrix?: RouteIndicatorLightMatrix;
  lightColor?: LightColor;
} & UIComponent<{
  frameClassName?: string;
  lineClassName?: string;
  lightClassName?: string;
}>;

export const RouteIndicator = ({
  lightMatrix,
  lightColor = 'moonWhite',
  className,
  frameClassName,
  lineClassName,
  lightClassName
}: RouteIndicatorProps) => {
  if (!lightMatrix || !lightMatrix.length) return null;

  const renderLightMatrix = () =>
    lightMatrix.map((line, id) => (
      <div key={id} className={cx(css.line, lineClassName)}>
        {line.map((active, id) => (
          <Light
            key={id}
            size="routePointer"
            color={active ? lightColor : 'turnedOff'}
            className={lightClassName}
          />
        ))}
      </div>
    ));

  return (
    <div className={cx(css.container, className)}>
      <div className={cx(css.frame, frameClassName)}>{renderLightMatrix()}</div>
    </div>
  );
};
