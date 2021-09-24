import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { TwoAspectPlate } from '../inside-single-signals';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';

const SmallSignal = ({ aspect, lights: { l1, l2, l3, l5 } }) => {
  // will be needed later [DON'T REMOVE]
  const { signalType } = useContext(CISSignalContext);
  //

  return (
    <SignalWrapper>
      <div className="post">
        <TwoAspectPlate
          l1={(aspect === 'green' && l2) || (aspect === 'moonWhite' && l5)}
          l2={(aspect === 'blue' && 'blue') || (aspect === 'red' && l3)}
        />
      </div>
    </SignalWrapper>
  );
};

export default SmallSignal;
