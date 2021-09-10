import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import Stripes from '../inside-single-signals/Stripes';

const BigSignal = ({ aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <div className="smaller-plate">
            <div className={`light ${l1}`}></div>
            <div className={`light ${zone === 'atp-4' ? l3 : l2}`}></div>
          </div>
          <div className="smaller-plate">
            <div className={`light ${zone === 'atp-4' ? l2 : l3}`}></div>
            <div className={`light ${l4}`}></div>
          </div>
          <div className="moonWhite-plate">
            <div className={`light ${l5}`}></div>
          </div>
        </div>
        <Stripes aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};
export default BigSignal;
