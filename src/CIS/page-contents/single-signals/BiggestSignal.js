import React, { useContext } from 'react';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import { CISSignalContext } from '../../CISSignalContext';
import {
  ThreeAspectPlate,
  TwoAspectPlate,
  Stripes,
  ConditionalSignalBoard,
  ShortBlockSign,
  RoutePointerBoard,
  SignalTypeSign,
} from '../inside-single-signals/';

const BiggestSignal = ({ id, aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  const { signalType } = useContext(CISSignalContext);

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
        <ShortBlockSign
          aspect={aspect}
          signalType={signalType}
        ></ShortBlockSign>
        <SignalTypeSign
          aspect={aspect}
          signalType={signalType}
          signalSize="biggest"
        />
      </div>
    </SignalWrapper>
  );
};

export default BiggestSignal;
