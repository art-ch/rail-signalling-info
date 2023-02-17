import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../CISSignalContext';
import { SignalWrapper } from '../ecosystems/StyledComponentsForSignals';
import {
  ThreeAspectPlate,
  SpecialBlockSignalBoard,
  ConditionalSignalBoard,
  SignalTypeSign
} from '../molecules';

const RegularSignal = ({ aspect, lights: { l1, l2, l3, l5 } }) => {
  const { zone, signalType } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">
        <ThreeAspectPlate
          l1={l5 !== null ? l5 : signalType === 'technological' ? null : l1}
          l2={
            zone === 'atp-4' ||
            (signalType === 'block' && aspect === 'yellow-green') ||
            signalType === 'humping'
              ? l3
              : signalType === 'technological'
              ? l1
              : l2
          }
          l3={
            zone === 'atp-4' ||
            (signalType === 'block' && aspect === 'yellow-green') ||
            signalType === 'humping'
              ? l2
              : l3
          }
        />
        <SpecialBlockSignalBoard
          aspect={aspect}
          zone={zone}
          signalType={signalType}
        />
        <ConditionalSignalBoard aspect={aspect} />
        <SignalTypeSign signalType={signalType} />
      </div>
    </SignalWrapper>
  );
};

export default RegularSignal;
