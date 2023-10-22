import React from 'react';

import cx from 'classnames';

import { LightColor } from 'src/components/atoms/Light/Light.types';
import {
  RouteIndicator,
  RouteIndicatorLightMatrix
} from 'src/components/molecules/RouteIndicator';

import { useCISSignalContext } from 'src/containers/CIS/context';
import { CISSignalType } from 'src/containers/CIS/context/CISSignalContext.types';

import css from './CISRouteIndicator.module.scss';

export type CISRouteIndicatorProps = { id: number; aspect: string };

export const CISRouteIndicator = ({ id, aspect }: CISRouteIndicatorProps) => {
  const {
    state: { signalType }
  } = useCISSignalContext();
  const humpingSignal =
    signalType === CISSignalType.Humping || (id > 35 && id < 39);

  const letterRoutePointer = aspect === 'route-pointer-letter';
  const greenRoutePointer = aspect === 'route-pointer-green';

  const defaultRoutePointer = letterRoutePointer || greenRoutePointer;
  const starShapedRoutePointer = id === 35;
  const routePointerN = aspect === 'red-route-pointer-N';

  const letterRoutePointerMatrix: RouteIndicatorLightMatrix = [
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1]
  ];

  const greenRoutePointerMatrix: RouteIndicatorLightMatrix = [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
  ];

  const starShapedRoutePointerMatrix: RouteIndicatorLightMatrix = [
    [0, 0, 1],
    [0, 1],
    [0, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 0],
    [1, 0, 0],
    [1, 0, 0]
  ];

  const routePointerNTurnedOffMatrix: RouteIndicatorLightMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  const routePointerNMatrix: RouteIndicatorLightMatrix = [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1]
  ];

  let lightMatrix: RouteIndicatorLightMatrix = [];

  switch (true) {
    case starShapedRoutePointer:
      lightMatrix = starShapedRoutePointerMatrix;
      break;
    case letterRoutePointer:
      lightMatrix = letterRoutePointerMatrix;
      break;
    case greenRoutePointer:
      lightMatrix = greenRoutePointerMatrix;
      break;
    case humpingSignal && routePointerN:
      lightMatrix = routePointerNMatrix;
      break;
    case humpingSignal && !routePointerN:
      lightMatrix = routePointerNTurnedOffMatrix;
      break;
  }

  const lightColor: LightColor = greenRoutePointer ? 'green' : 'white';

  const routeInicaRouteIndicatorProps = { lightMatrix, lightColor };

  return (
    <RouteIndicator
      {...routeInicaRouteIndicatorProps}
      className={cx(css.container, {
        [css.withFirstLineMargin]: defaultRoutePointer,
        [css.starShaped]: starShapedRoutePointer
      })}
      lineClassName={cx(css.line, { [css.starShaped]: starShapedRoutePointer })}
      lightClassName={cx(css.light, {
        [css.withFirstLineMargin]: defaultRoutePointer
      })}
    />
  );
};
