import React from 'react';

import cx from 'classnames';

import { SignalTypeSign } from 'src/components/molecules/SignalTypeSign';
import { useCISSignalContext } from 'src/containers/CIS/context';

import { getSignalTypeSign, validateSignalType } from './CISSignalType.utils';

import { CISSignalTypeSimplified } from 'src/containers/CIS/context/CISSignalContext.types';

import css from './CISSignalTypeSign.module.scss';

export type CISSignalTypeSignProps = {
  aspect: string;
  placeElementsHorizontally?: boolean;
  nonShuntingMoonWhiteTypeSign?: boolean;
};

export const CISSignalTypeSign = ({
  aspect,
  nonShuntingMoonWhiteTypeSign = false,
  placeElementsHorizontally = false
}: CISSignalTypeSignProps) => {
  const {
    state: { signalType },
    content: { signalTypeSigns }
  } = useCISSignalContext();

  const validSignalType = validateSignalType(signalType);

  const signalTypeSign = getSignalTypeSign({
    signalTypeSigns,
    signalProperties: { aspect, nonShuntingMoonWhiteTypeSign },
    signalTypes: { signalType, simplifiedSignalType: CISSignalTypeSimplified }
  });

  const textElements = signalTypeSign?.letters;

  const options = {
    separateBoardForEachTextElement: true,
    placeElementsHorizontally
  };

  const renderSign = validSignalType && textElements;

  if (renderSign) {
    return (
      <SignalTypeSign
        textElements={textElements}
        options={options}
        className={cx(css.container, {
          [css.horizontalPlacement]: placeElementsHorizontally
        })}
      />
    );
  }

  return null;
};
