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

  const signalLogic = {
    functionOne(aspect) {
      switch (aspect) {
        case 'yellow':
        case 'two-yellows':
        case 'two-yellows-stripe':
        case 'two-yellows-two-stripes':
        case 'three-yellows':
        case 'yellow-green':
        case 'yellow-moonWhite':
          return 'yellow';
        case 'yellow-flickering':
        case 'two-yellows-flickering':
        case 'two-yellows-flickering-stripe':
        case 'two-yellows-flickering-two-stripes':
        case 'yellow-moonWhite-flickering':
          return 'yellow-flickering';
        default:
          return null;
      }
    },
    functionTwo(aspect) {
      switch (aspect) {
        case 'green':
        case 'green-moonWhite':
          return 'green';
        case 'green-flickering':
        case 'green-flickering-yellow-stripe':
        case 'green-flickering-yellow-two-stripes':
          return 'green-flickering';
        default:
          return null;
      }
    },
    functionThree(aspect) {
      switch (aspect) {
        case 'red':
          return 'red';
        case 'yellow-green':
          return 'green';
        case 'three-yellows':
          return 'yellow';
        default:
          return null;
      }
    },
    functionFour(aspect) {
      switch (aspect) {
        case 'two-yellows':
        case 'two-yellows-stripe':
        case 'two-yellows-two-stripes':
        case 'two-yellows-flickering':
        case 'two-yellows-flickering-stripe':
        case 'two-yellows-flickering-two-stripes':
        case 'green-flickering-yellow-stripe':
        case 'green-flickering-yellow-two-stripes':
          return 'yellow';
        default:
          return null;
      }
    },
    functionFive(aspect) {
      switch (aspect) {
        case 'moonWhite':
        case 'green-moonWhite':
        case 'yellow-moonWhite':
        case 'yellow-moonWhite-flickering':
          return 'moon-white';
        case 'three-yellows':
          return 'yellow';
        default:
          return null;
      }
    },
  };

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
        signalLogic,
        renderSignals,
        filterSignals,
      }}
    >
      {children}
    </CISSignalContext.Provider>
  );
};

export { CISSignalProvider, CISSignalContext };
