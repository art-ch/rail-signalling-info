'use client';

import React, { useState, useContext } from 'react';

import { SignalProviderProps } from 'src/types/context';

import {
  CISLocomotiveSignalization,
  CISSignalContextProps,
  CISSignalState,
  CISSignalStateWithHandlers,
  CISSignalType,
  CISSignType,
  CISTrainProtectionZone
} from './CISSignalContext.types';

const CISSignalContext = React.createContext<CISSignalContextProps | null>(
  null
);

export const CISSignalProvider = ({
  children,
  content
}: SignalProviderProps) => {
  const [signalType, setSignalType] = useState(CISSignalType.All);
  const [signType, setSignType] = useState(CISSignType.All);
  const [trainProtectionZone, setTrainProtectionZone] = useState(
    CISTrainProtectionZone.All
  );
  const [locomotiveSignalization, setLocomotiveSignalization] = useState(
    CISLocomotiveSignalization.Regular
  );

  const resetSignalState = () => {
    setTrainProtectionZone(CISTrainProtectionZone.All);
    setSignalType(CISSignalType.All);
  };
  const setTrainProtectionZoneState = (option: CISTrainProtectionZone) => {
    setTrainProtectionZone(option);
    setSignalType(CISSignalType.All);
  };
  const setSignalTypeState = (option: CISSignalType) => {
    setTrainProtectionZone(CISTrainProtectionZone.All);
    setSignalType(option);
  };
  const setSignTypeState = (option: CISSignType) => {
    setSignType(option);
  };
  const setLocomotiveSignalizationState = (
    option: CISLocomotiveSignalization
  ) => {
    setLocomotiveSignalization(option);
  };

  const allSignals =
    trainProtectionZone === CISTrainProtectionZone.All &&
    signalType === CISSignalType.All &&
    CISSignalType.All;

  const state: CISSignalState = {
    allSignals: allSignals,
    trainProtectionZone,
    signalType,
    signType,
    locomotiveSignalization
  };

  const stateWithHandlers: CISSignalStateWithHandlers = {
    allSignalsState: [allSignals, resetSignalState],
    trainProtectionZoneState: [
      trainProtectionZone,
      setTrainProtectionZoneState
    ],
    signalTypeState: [signalType, setSignalTypeState],
    signTypeState: [signType, setSignTypeState],
    locomotiveSignalizationState: [
      locomotiveSignalization,
      setLocomotiveSignalizationState
    ]
  };

  return (
    <CISSignalContext.Provider
      value={{
        content,
        state,
        stateWithHandlers
      }}
    >
      {children}
    </CISSignalContext.Provider>
  );
};

export const useCISSignalContext = () => {
  const context = useContext(CISSignalContext);

  if (!context) {
    throw new Error(
      'useCISSignalContext must be used within CISSignalProvider'
    );
  }

  return context;
};

export { CISSignalContext };
