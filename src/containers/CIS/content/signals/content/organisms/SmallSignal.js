import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../CISSignalContext';
import { TwoAspectPlate, SignalTypeSign } from '../molecules';
import { SignalWrapper } from '../ecosystems/StyledComponentsForSignals';

const SmallSignal = ({ aspect, lights: { l1, l2, l3, l5 } }) => {
  const { signalType } = useContext(CISSignalContext);

  return (
    <SignalWrapper>
      <div className="post">
        <TwoAspectPlate
          l1={
            (aspect === 'green' && l2) ||
            (aspect === 'moonWhite' && l5) ||
            (signalType === 'industrial' &&
              (aspect === 'yellow' || aspect === 'yellow-flickering') &&
              l1)
          }
          l2={
            (aspect === 'blue' && 'blue') ||
            (aspect === 'red' && l3) ||
            (signalType === 'warning' &&
              (aspect === 'yellow' || aspect === 'yellow-flickering') &&
              l1)
          }
        />
        <SignalTypeSign signalType={signalType} />
      </div>
    </SignalWrapper>
  );
};

export default SmallSignal;
