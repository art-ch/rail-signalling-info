import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { OneAspectPlate, SignalTypeSign } from '../inside-single-signals';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';

const DiamondShapedSignal = ({ id, lights }) => {
  const { signalType } = useContext(CISSignalContext);
  let l1 = null;
  if (typeof lights === 'object') {
    l1 = Object.values(lights).filter((light) => light !== null)[0];
  }
  return (
    <SignalWrapper>
      <div
        className={`${
          signalType === 'obstruction' || id === 31
            ? 'obstruction-signal-post'
            : 'post'
        }`}
      >
        <OneAspectPlate l1={l1} specialClass="diamond-shaped-plate" />
        <SignalTypeSign signalType={signalType} />
      </div>
    </SignalWrapper>
  );
};

export default DiamondShapedSignal;
