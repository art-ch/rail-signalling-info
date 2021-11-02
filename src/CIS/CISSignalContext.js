import React, { useState } from 'react';

const CISSignalContext = React.createContext();

const CISSignalProvider = ({ children }) => {
  const [zone, setZone] = useState('all');
  const [signalType, setSignalType] = useState('all');

  const filterButtons = (id, name) => {
    if (id >= 8) {
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
    if (zone === 'main') {
      newAspects = [...aspects.slice(0, 8)].map((aspect) => {
        return {
          ...aspect,
          info: aspect.info.filter(
            ({ type }) => type === 'main' || type === 'maneuvering'
          ),
        };
      });
    }
    if (zone === 'fast') {
      newAspects = [...aspects.slice(8, 14)].map((aspect) => {
        return {
          ...aspect,
          info: aspect.info.filter(({ type }) => type === 'main'),
        };
      });
    }
    if (zone === 'atp') {
      newAspects = [aspects[0], aspects[14], ...aspects.slice(1, 14)];
    }
    if (zone === 'atp-4') {
      newAspects = [
        aspects[0],
        aspects[14],
        aspects[28],
        ...aspects.slice(1, 8),
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
            info: aspect.info.filter(({ type }) => type === 'block'),
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

    if (signalType === 'all') {
      if (zone !== 'all' && zone !== 'main' && zone !== 'fast') {
        return newAspects.map((aspect) => {
          if (aspect.name !== 'red') {
            return {
              ...aspect,
              info: aspect.info.filter(({ type }) => type !== 'main'),
            };
          }
          return aspect;
        });
      }
      return newAspects;
    } else {
      return newAspects
        .map((aspect) => {
          return {
            ...aspect,
            info: aspect.info.filter(({ type }) => type === signalType),
          };
        })
        .filter(({ info }) => info.length > 0);
    }
  };

  return (
    <CISSignalContext.Provider
      value={{
        zone,
        setZone,
        filterButtons,
        filterAspects,
      }}
    >
      {children}
    </CISSignalContext.Provider>
  );
};

export { CISSignalProvider, CISSignalContext };
