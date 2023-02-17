import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../CISSignalContext';
import { SignalWrapper } from '../ecosystems/StyledComponentsForSignals';
import {
  TwoAspectPlate,
  OneAspectPlate,
  Stripes,
  RoutePointerBoard,
  ConditionalSignalBoard,
  SignalTypeSign
} from '../molecules';

const BigSignal = ({ aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  const { zone, signalType } = useContext(CISSignalContext);

  const isSignalTypeHumping = () =>
    signalType === 'humping' || zone === 'atp-4';

  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <TwoAspectPlate l1={l1} l2={isSignalTypeHumping() ? l3 : l2} />
          <TwoAspectPlate l1={isSignalTypeHumping() ? l2 : l3} l2={l4} />
          <OneAspectPlate l1={l5} />
        </div>
        <Stripes aspect={aspect} />
        <ConditionalSignalBoard aspect={aspect} />
        <RoutePointerBoard aspect={aspect} />
        <SignalTypeSign signalType={signalType} />
      </div>
    </SignalWrapper>
  );
};

export default BigSignal;
