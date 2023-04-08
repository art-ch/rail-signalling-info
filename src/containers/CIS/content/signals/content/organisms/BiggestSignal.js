import React, { useContext } from 'react';
import { SignalWrapper } from '../ecosystems/StyledComponentsForSignals';
import { CISSignalContext } from '../../../../context/CISSignalContext';
import {
  ThreeAspectPlate,
  TwoAspectPlate,
  Stripes,
  ConditionalSignalBoard,
  ShortBlockSign,
  RoutePointerBoard,
  SignalTypeSign,
  OutOfServicePlanks
} from '../molecules';

const BiggestSignal = ({ id, aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  const { signalType } = useContext(CISSignalContext);

  const isAspectYellowGreen = () => aspect === 'yellow-green';

  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <ThreeAspectPlate
            l1={l1}
            l2={isAspectYellowGreen() ? l3 : l2}
            l3={isAspectYellowGreen() ? l2 : l3}
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
        <OutOfServicePlanks id={id} />
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
