import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';
import {
  CISSignalType,
  CISTrainProtectionZone
} from 'src/containers/CIS/context/CISSignalContext.types';

import css from './SpecialBlockSignalBoard.module.scss';

export type SpecialBlockSignalBoardProps = {
  signalProperties?: {
    aspect: string;
    trainProtectionZone: CISTrainProtectionZone;
    signalType: CISSignalType;
  };
  renderAsStandaloneSign?: boolean;
};

export const SpecialBlockSignalBoard = ({
  signalProperties,
  renderAsStandaloneSign
}: SpecialBlockSignalBoardProps) => {
  if (!signalProperties && !renderAsStandaloneSign)
    throw new Error('Cannot render SpecialBlockSignalBoard without any props');

  const { aspect, trainProtectionZone, signalType } = signalProperties || {};

  const specialAtpBlockSignal =
    trainProtectionZone === CISTrainProtectionZone.ATP ||
    trainProtectionZone === CISTrainProtectionZone.ATP4 ||
    signalType === CISSignalType.Block;

  const flickeringSignal =
    aspect === 'green-flickering' || aspect === 'yellow-flickering';

  const renderOnSignal = specialAtpBlockSignal && flickeringSignal;

  const renderComponent = renderOnSignal || renderAsStandaloneSign;

  const AMOUNT_OF_INNER_ELEMENTS = 3;
  const INNER_ELEMENTS_STUB = Array.from({ length: AMOUNT_OF_INNER_ELEMENTS });

  if (renderComponent) {
    return (
      <Board
        className={cx(css.board, {
          [css.onSignal]: renderOnSignal,
          [css.standaloneSign]: renderAsStandaloneSign
        })}
      >
        {INNER_ELEMENTS_STUB.map((_, index) => (
          <div className={css.blackStripe} key={index}>
            {INNER_ELEMENTS_STUB.map((_, index) => (
              <div className={css.whiteDot} key={index} />
            ))}
          </div>
        ))}
      </Board>
    );
  }

  return null;
};
