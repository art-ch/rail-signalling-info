import React from 'react';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import {
  ThreeAspectPlate,
  TwoAspectPlate,
  Stripes,
  ConditionalSignalBoard,
  RoutePointerBoard,
} from '../inside-single-signals/';

const BiggestSignal = ({ id, aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <ThreeAspectPlate
            l1={l1}
            l2={aspect === 'yellow-green' ? l3 : l2}
            l3={aspect === 'yellow-green' ? l2 : l3}
          />
          <TwoAspectPlate l1={l4} l2={l5} />
        </div>
        <Stripes aspect={aspect} />
        <ConditionalSignalBoard aspect={aspect} />
        <RoutePointerBoard id={id} aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};

export default BiggestSignal;
