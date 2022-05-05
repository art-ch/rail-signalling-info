import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../CISSignalContext';
import { OneAspectPlate, SignalTypeSign } from '../molecules';
import { SignalWrapper } from '../ecosystems/StyledComponentsForSignals';

const DiamondShapedSignal = ({ id, aspect, lights }) => {
  const { signalType } = useContext(CISSignalContext);
  let l1 = null;
  if (typeof lights === 'object') {
    l1 = Object.values(lights).filter((light) => light !== null)[0];
  }
  return (
    <SignalWrapper>
      <div
        className={`${
          signalType === 'obstruction' || id === 32
            ? 'obstruction-signal-post'
            : 'post'
        }`}
      >
        <OneAspectPlate l1={l1} specialClass="diamond-shaped-plate" />
        <SignalTypeSign aspect={aspect} signalType={signalType} />
      </div>
    </SignalWrapper>
  );
};

export default DiamondShapedSignal;
