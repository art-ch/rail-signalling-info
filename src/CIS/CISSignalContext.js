import React, { useState } from 'react';
import { aspects } from './data';
import {
  BigSignal,
  DwarfManeuveringSignal,
  CombinedSignals,
} from './assets/Signals';

const CISSignalContext = React.createContext();

const CISSignalProvider = ({ children }) => {
  const [zone, setZone] = useState('all');
  const [signalType, setSignalType] = useState('all');

  // console.log(zone);
  // console.log(signalType);

  const renderSignals = aspects.map((aspect) => {
    const { id, name, description } = aspect;
    const { entry, exit } = aspect.description;
    return (
      <article className="signal-card" key={id}>
        {name === 'moonWhite' ? (
          <CombinedSignals aspect={name} />
        ) : name === 'blue' ? (
          <DwarfManeuveringSignal aspect={name} />
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

  const filterSignals = () => {
    if (zone === 'all') {
      return renderSignals;
    }
    if (zone === 'main') {
      return renderSignals.slice(0, 8);
    }
    if (zone === 'fast') {
      // TODO: confirm that this zone has all regular double yellows
      return [renderSignals.slice(8, 14), renderSignals.slice(0, 8)];
    }
  };

  return (
    <CISSignalContext.Provider
      value={{
        setZone,
        setSignalType,
        renderSignals,
        filterSignals,
      }}
    >
      {children}
    </CISSignalContext.Provider>
  );
};

export { CISSignalProvider, CISSignalContext };
