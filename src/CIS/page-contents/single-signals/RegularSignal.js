import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import {
  ThreeAspectPlate,
  RoutingSignalBoard,
  ConditionalSignalBoard,
} from '../inside-single-signals';

const RegularSignal = ({ aspect, lights: { l1, l2, l3 } }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">
        <ThreeAspectPlate
          l1={l1}
          l2={zone === 'atp-4' ? l3 : l2}
          l3={zone === 'atp-4' ? l2 : l3}
        />
        <RoutingSignalBoard aspect={aspect} zone={zone} />
        <ConditionalSignalBoard aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};

export default RegularSignal;
