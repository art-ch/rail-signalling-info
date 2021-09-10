import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';

const SmallSignal = ({ aspect, lights }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <SignalWrapper>
      <div className="post">
        <div className="smaller-plate" style={{ marginTop: '0.5rem' }}>
          <div
            className={`light ${
              aspect === 'green'
                ? 'green'
                : aspect === 'moonWhite'
                ? 'moonWhite'
                : null
            }`}
          ></div>
          <div
            className={`light ${
              aspect === 'blue' ? 'blue' : aspect === 'red' ? 'red' : null
            }`}
          ></div>
        </div>
      </div>
    </SignalWrapper>
  );
};

export default SmallSignal;
