import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import {
  ThreeAspectPlate,
  RoutingSignalBoard,
  ConditionalSignalBoard,
} from '../inside-single-signals';

const RegularSignal = ({ aspect, lights: { l1, l2, l3, l5 } }) => {
  const { zone, signalType } = useContext(CISSignalContext);
  console.log(l5);
  return (
    <SignalWrapper>
      <div className="post">
        <ThreeAspectPlate
          l1={l5 !== null ? l5 : l1}
          l2={zone === 'atp-4' || signalType === 'humping' ? l3 : l2}
          l3={zone === 'atp-4' || signalType === 'humping' ? l2 : l3}
        />
        <RoutingSignalBoard aspect={aspect} zone={zone} />
        <ConditionalSignalBoard aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};

export default RegularSignal;
