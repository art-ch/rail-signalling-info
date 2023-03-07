'use client';

import React, { useState, useContext } from 'react';
import { ZonePageContent } from '../components/pages/ZonePage';
import { SignalTypeSign } from '../types';

export type SignalContextProps = {
  zone: string;
  signalType: string;
  signalTypeSigns: SignalTypeSign[];
  signType: string;
  setZone: React.Dispatch<React.SetStateAction<string>>;
  filterSignals: (e: any, id: any, name: any) => void;
  filterAspects: (aspects: any) => any[];
  filterSigns: (name: any) => void;
  filteredSigns: (signs: any) => never[];
};

const SignalContext = React.createContext<SignalContextProps>({
  zone: '',
  signalType: '',
  signalTypeSigns: [],
  signType: '',
  setZone: () => '',
  filterSignals: (e: any, id: any, name: any) => [],
  filterAspects: (aspects: any) => [],
  filterSigns: (name: any) => [],
  filteredSigns: (signs: any) => []
});

export type SignalProviderProps = {
  children: React.ReactNode;
  zonePageContent: ZonePageContent;
};

export const SignalProvider = ({
  children,
  zonePageContent
}: SignalProviderProps) => {
  const [zone, setZone] = useState('all');
  const [signalType, setSignalType] = useState('all');
  const [signType, setSignType] = useState('all');

  const { signalTypeSigns } = zonePageContent;

  const filterSignals = (e, id, name) => {
    const firstButton =
      e.target.parentElement.parentElement.firstElementChild.firstElementChild;
    if (id !== 1) {
      firstButton.classList.remove('active');
    } else {
      firstButton.classList.add('active');
    }

    if (id > 6) {
      setZone('all');
      setSignalType(`${name}`);
    } else {
      setZone(`${name}`);
      setSignalType('all');
    }
  };

  const filterAspects = (aspects) => {
    let newAspects = [];
    if (zone === 'all') {
      newAspects = aspects;
    }
    if (zone === 'atp') {
      newAspects = [aspects[0], aspects[14], ...aspects.slice(1, 14)];
    }
    if (zone === 'atp-4') {
      newAspects = [
        aspects[0],
        aspects[29],
        aspects[14],
        ...aspects.slice(1, 8)
      ];
    }
    if (zone === 'atp' || zone === 'atp-4') {
      newAspects = newAspects.map((aspect) => {
        if (
          aspect.name === 'green-flickering' ||
          aspect.name === 'yellow-flickering'
        ) {
          return {
            ...aspect,
            info: aspect.info.filter(({ type }) => type === 'block')
          };
        }
        return aspect;
      });
    }
    if (zone === 'altp') {
      newAspects = [...aspects.slice(18, 26), aspects[5]];
    }
    if (zone === 'semi-atp') {
      newAspects = [aspects[0], ...aspects.slice(3, 8)];
    }
    if (zone === 'private') {
      newAspects = [
        aspects[0],
        aspects[2],
        ...aspects.slice(4, 7),
        ...aspects.slice(15, 18),
        aspects[32],
        aspects[29]
      ];
    }

    if (signalType === 'all') {
      if (zone !== 'all') {
        return newAspects.map((aspect) => {
          if (aspect.name !== 'red') {
            return {
              ...aspect,
              info: aspect.info.filter(({ type }) => type !== 'main')
            };
          }
          return aspect;
        });
      }
      return newAspects;
    } else if (signalType === 'main') {
      return newAspects.map((aspect) => {
        if (aspect.name !== 'red') {
          return {
            ...aspect,
            info: aspect.info.filter(
              ({ type }) => type === 'main' || type === 'shunting'
            )
          };
        }
        return aspect;
      });
    } else {
      return newAspects
        .map((aspect) => {
          return {
            ...aspect,
            info: aspect.info.filter(({ type }) =>
              signalType === 'shunting' ||
              signalType === 'warning' ||
              signalType === 'other'
                ? type === signalType
                : type === signalType || aspect.name === 'red'
            )
          };
        })
        .filter(({ info }) => info.length > 0);
    }
  };

  const filterSigns = (name) => {
    setSignType(name);
  };

  const filteredSigns = (signs) => {
    let newSigns = [];

    if (signType === 'all') {
      newSigns = signs;
    }
    if (signType === 'hand') {
      newSigns = [...signs.slice(0, 10)];
    }
    if (signType === 'pointers') {
      newSigns = [...signs.slice(10, 18)];
    }
    if (signType === 'textless') {
      newSigns = [...signs.slice(18, 34)];
    }
    if (signType === 'text-signs') {
      newSigns = [...signs.slice(34)];
    }

    return newSigns;
  };

  const value = {
    zone,
    signalType,
    signalTypeSigns,
    signType,
    setZone,
    filterSignals,
    filterAspects,
    filterSigns,
    filteredSigns
  };

  return (
    <SignalContext.Provider value={value}>{children}</SignalContext.Provider>
  );
};

export const useSignalContext = () => useContext(SignalContext);

export { SignalContext };
