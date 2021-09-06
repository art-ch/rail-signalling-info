import React, { useState } from 'react';
import { aspects } from './data';
import {
  BiggestSignal,
  RegularSignal,
  SmallSignal,
  DwarfManeuveringSignal,
  CombinedSignals,
} from './assets/Signals';

const CISSignalContext = React.createContext();

const CISSignalProvider = ({ children }) => {
  const [zone, setZone] = useState('semi-atp');
  const [signalType, setSignalType] = useState('all');

  // console.log(zone);
  // console.log(signalType);

  // TODO: renderSignals to renderBigSignals, renderAtpSignals, renderSemiAtpSignals
  // and probably separate for combinedSignals

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
          <BiggestSignal aspect={name} />
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

  const atpAstpects = [
    aspects[0],
    aspects[1],
    ...aspects.slice(3, 14),
    aspects[2],
    aspects[14],
  ];

  const renderAtpSignals = atpAstpects.map((aspect) => {
    const { id, name, description } = aspect;
    const { exit } = aspect.description;
    return (
      <article className="signal-card" key={id}>
        {name === 'moonWhite' ? (
          <CombinedSignals aspect={name} />
        ) : name === 'blue' ? (
          <DwarfManeuveringSignal aspect={name} />
        ) : name === 'green' ||
          name === 'yellow' ||
          name === 'yellow-flickering' ||
          name === 'green-flickering' ||
          name === 'red' ? (
          <RegularSignal aspect={name} />
        ) : (
          <BiggestSignal aspect={name} />
        )}
        <div className="description-container">
          <h1>{name}</h1>
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            <div>
              <h4>Exit</h4>
              <p>{exit}</p>
            </div>
          )}
        </div>
      </article>
    );
  });

  const semiAtpAstpects = [aspects[0], ...aspects.slice(3, 8)];

  const renderSemiAtpSignals = semiAtpAstpects.map((aspect) => {
    const { id, name, description } = aspect;
    const { exit } = aspect.description;
    return (
      <article className="signal-card" key={id}>
        {name === 'moonWhite' ? (
          <CombinedSignals aspect={name} />
        ) : name === 'blue' ? (
          <DwarfManeuveringSignal aspect={name} />
        ) : name === 'green' || name === 'yellow' || name === 'red' ? (
          <SmallSignal aspect={name} />
        ) : (
          <BiggestSignal aspect={name} />
        )}
        <div className="description-container">
          <h1>{name}</h1>
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            <div>
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
      return renderSignals.slice(0, 14);
    }
    if (zone === 'atp') {
      return renderAtpSignals;
    }
    if (zone === 'semi-atp') {
      return renderSemiAtpSignals;
    }
  };

  return (
    <CISSignalContext.Provider
      value={{
        zone,
        setZone,
        setSignalType,
        filterSignals,
      }}
    >
      {children}
    </CISSignalContext.Provider>
  );
};

export { CISSignalProvider, CISSignalContext };
