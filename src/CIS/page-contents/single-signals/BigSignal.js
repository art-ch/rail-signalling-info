import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import {
  TwoAspectPlate,
  OneAspectPlate,
  Stripes,
  ConditionalSignalBoard,
} from '../inside-single-signals/';

const BigSignal = ({ aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <TwoAspectPlate l1={l1} l2={zone === 'atp-4' ? l3 : l2} />
          <TwoAspectPlate l1={zone === 'atp-4' ? l2 : l3} l2={l4} />
          <OneAspectPlate l1={l5} />
        </div>
        <Stripes aspect={aspect} />
        <ConditionalSignalBoard aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};

export default BigSignal;
