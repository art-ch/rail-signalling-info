import React, { useState } from 'react';
import { aspects } from './data';

const CISSignalContext = React.createContext();

const CISSignalProvider = ({ children }) => {
  const [zone, setZone] = useState('altp');
  const [signalType, setSignalType] = useState('all');

  return (
    <CISSignalContext.Provider
      value={{
        zone,
        setZone,
        setSignalType,
      }}
    >
      {children}
    </CISSignalContext.Provider>
  );
};

export { CISSignalProvider, CISSignalContext };
