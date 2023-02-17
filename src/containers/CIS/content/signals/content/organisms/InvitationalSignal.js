import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../CISSignalContext';
import { OneAspectPlate, SignalTypeSign } from '../molecules';
import { SignalWrapper } from '../ecosystems/StyledComponentsForSignals';

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
