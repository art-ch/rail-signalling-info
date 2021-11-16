import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { OneAspectPlate, SignalTypeSign } from '../inside-single-signals';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';

const InvitationalSignal = ({ lights: { l3, l5 } }) => {
  const { signalType } = useContext(CISSignalContext);

  return (
    <SignalWrapper>
      <div className="post">
        <OneAspectPlate l1={l3} specialClass="invitational-signal-plate" />
        <OneAspectPlate l1={l5} specialClass="invitational-signal-plate" />
        <SignalTypeSign signalType={signalType} />
      </div>
    </SignalWrapper>
  );
};

export default InvitationalSignal;
