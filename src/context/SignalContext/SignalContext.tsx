'use client';

import React, { useState, useContext } from 'react';

import {
  SignalContextProps,
  SignalProviderProps,
  SignalTypeState,
  SignTypeState,
  ZoneState
} from './SignalContext.types';
import { ZonePageContentTypes } from '../../components/pages/ZonePage/ZonePageContentRenderer';

const SignalContext = React.createContext<SignalContextProps | null>(null);

export const SignalProvider = ({
  children,
  content,
  filterHandlers
}: SignalProviderProps) => {
  const [shownContent, setShownContent] =
    useState<ZonePageContentTypes>('Signals');

  const [zone, setZone] = useState('all');
  const [signalType, setSignalType] = useState('all');
  const [signType, setSignType] = useState('all');

  const zoneState: ZoneState = [zone, setZone];
  const signalTypeState: SignalTypeState = [signalType, setSignalType];
  const signTypeState: SignTypeState = [signType, setSignType];

  const value = {
    content,
    shownContent,
    setShownContent,
    zoneState,
    signalTypeState,
    signTypeState,
    filterHandlers
  };

  return (
    <SignalContext.Provider value={value}>{children}</SignalContext.Provider>
  );
};

export const useSignalContext = () => {
  const context = useContext(SignalContext);

  if (!context) {
    throw new Error('useSignalContext must be used within SignalProvider');
  }

  return context;
};
