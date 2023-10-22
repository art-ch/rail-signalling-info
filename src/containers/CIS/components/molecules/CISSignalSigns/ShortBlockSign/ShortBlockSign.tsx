import React from 'react';

import { ImArrowDown } from 'react-icons/im';

import { Board } from 'src/components/atoms/Board';

import { CISSignalType } from 'src/containers/CIS/context/CISSignalContext.types';

import css from './ShortBlockSign.module.scss';

export type ShortBlockSignProps = { aspect: string; signalType: CISSignalType };

export const ShortBlockSign = ({ aspect, signalType }: ShortBlockSignProps) => {
  const yellowGreenSpecialSignal =
    aspect === 'yellow-green' &&
    (signalType === CISSignalType.Entry || signalType === CISSignalType.Route);

  const twoYellowsSpecialSignal =
    aspect === 'two-yellows-special' && signalType === CISSignalType.Special;

  const shouldBeRendered = yellowGreenSpecialSignal || twoYellowsSpecialSignal;

  if (shouldBeRendered) {
    return (
      <div className={css.container}>
        {Array.from({ length: 2 }).map((_, id) => (
          <Board key={id} className={css.board}>
            <ImArrowDown />
          </Board>
        ))}
      </div>
    );
  }

  return null;
};
