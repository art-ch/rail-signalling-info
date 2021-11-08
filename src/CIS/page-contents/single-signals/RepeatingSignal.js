import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { OneAspectPlate } from '../inside-single-signals';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';

const RepeatingSignal = ({ lights }) => {
  let l1 = null;
  if (typeof lights === 'object') {
    l1 = Object.values(lights).filter((light) => light !== null)[0];
  }
  return (
    <SignalWrapper>
      <div className="post">
        <OneAspectPlate l1={l1} specialClass="diamond-shaped" />
      </div>
    </SignalWrapper>
  );
};

export default RepeatingSignal;
