import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';

const RegularSignal = ({ lights }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">
        <div className="plate" style={{ marginTop: '0.5rem' }}>
          <div className={`light ${lights.l1}`}></div>
          <div
            className={`light ${zone === 'atp-4' ? lights.l3 : lights.l2}`}
          ></div>
          <div
            className={`light ${zone === 'atp-4' ? lights.l2 : lights.l3}`}
          ></div>
        </div>
      </div>
    </SignalWrapper>
  );
};

export default RegularSignal;
