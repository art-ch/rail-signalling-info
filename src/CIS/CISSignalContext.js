import React, { useState } from 'react';
import { aspects } from './data';
import {
  BigSignal,
  SmallSignal,
  CombinedSignals,
} from './signal-assets/Signals';

const CISSignalContext = React.createContext();

const CISSignalProvider = ({ children }) => {
  const [zone, setZone] = useState('all');

  const renderSignals = aspects.map((aspect) => {
    const { id, name, description } = aspect;
    const { entry, exit } = aspect.description;
    return (
      <article className="signal-card" key={id}>
        {name === 'moonWhite' ? (
          <CombinedSignals aspect={name} />
        ) : name === 'blue' ? (
          <SmallSignal aspect={name} />
        ) : (
          <BigSignal aspect={name} />
        )}
        <div className="description-container">
          <h1>{name}</h1>
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            <div>
              <h4>Entry</h4>
              <p>{entry}</p>
              <h4>Exit</h4>
              <p>{exit}</p>
            </div>
          )}
        </div>
      </article>
    );
  });

  return (
    <CISSignalContext.Provider value={{ zone, setZone, renderSignals }}>
      {children}
    </CISSignalContext.Provider>
  );
};

export { CISSignalProvider, CISSignalContext };
