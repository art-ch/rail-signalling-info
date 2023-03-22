'use client';

import React, { useState, useContext } from 'react';
import { ZonePageContent } from '../components/pages/ZonePage';
import { ZonePageContentTypes } from '../components/pages/ZonePage/ZonePageContentRenderer';

export type SignalContextProps = {
  content: ZonePageContent;

  shownContent: ZonePageContentTypes;
  setShownContent: React.Dispatch<React.SetStateAction<ZonePageContentTypes>>;

  zone: string;
  setZone: React.Dispatch<React.SetStateAction<string>>;

  signalType: string;
  setSignalType: React.Dispatch<React.SetStateAction<string>>;

  signType: string;
  setSignType: React.Dispatch<React.SetStateAction<string>>;

  // filterSignals: (event: Event, id: number, name: string) => void;
  // getFilteredSignals: (signals: Signal[]) => Signal[];

  // filterSigns: (name: string) => void;
  // getFilterededSigns: (signs: Sign[]) => Sign[];
};

const SignalContext = React.createContext<SignalContextProps | null>(null);

export type SignalProviderProps = {
  children: React.ReactNode;
  content: ZonePageContent;
};

export const SignalProvider = ({ children, content }: SignalProviderProps) => {
  const [shownContent, setShownContent] =
    useState<ZonePageContentTypes>('Signals');

  const [zone, setZone] = useState('all');
  const [signalType, setSignalType] = useState('all');
  const [signType, setSignType] = useState('all');

  const value = {
    content,
    shownContent,
    zone,
    signalType,
    signType,
    setShownContent,
    setZone,
    setSignalType,
    setSignType
    // filterSignals,
    // getFilteredSignals,
    // filterSigns,
    // getFilteredSigns
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
