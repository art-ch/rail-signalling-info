import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import RoutingSignalBoard from '../inside-single-signals/RoutingSignalBoard';

const RegularSignal = ({ aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">
        <div className="plate" style={{ marginTop: '0.5rem' }}>
          <div className={`light ${l1}`}></div>
          <div className={`light ${zone === 'atp-4' ? l3 : l2}`}></div>
          <div className={`light ${zone === 'atp-4' ? l2 : l3}`}></div>
        </div>
        <RoutingSignalBoard aspect={aspect} zone={zone} />
      </div>
    </SignalWrapper>
  );
};

export default RegularSignal;
