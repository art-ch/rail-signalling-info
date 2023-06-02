import React from 'react';

import { SignalTypeSign } from 'src/components/molecules/SignalTypeSign';
import { useCISSignalContext } from 'src/containers/CIS/context';

import { getSignalTypeSign, validateSignalType } from './CISSignalType.utils';

import { CISSignalTypeSimplified } from 'src/containers/CIS/context/CISSignalContext.types';

export type CISSignalTypeSignProps = {
  aspect: string;
  nonShuntingMoonWhiteTypeSign?: boolean;
};

export const CISSignalTypeSign = ({
  aspect,
  nonShuntingMoonWhiteTypeSign = false
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

  const renderSign = validSignalType && textElements;

  if (renderSign) {
    return (
      <SignalTypeSign
        textElements={textElements}
        mode={'separateBoardForEachTextElement'}
      />
    );
  }

  return null;
};
