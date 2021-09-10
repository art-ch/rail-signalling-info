import React, { useState } from 'react';
import { aspects } from './data';

const CISSignalContext = React.createContext();

const CISSignalProvider = ({ children }) => {
  const [zone, setZone] = useState('atp-4');
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
