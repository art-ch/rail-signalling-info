import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import Stripes from '../inside-single-signals/Stripes';

const BigSignal = ({ aspect, lights }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <div className="smaller-plate">
            <div className={`light ${lights.l1}`}></div>
            <div
              className={`light ${zone === 'atp-4' ? lights.l3 : lights.l2}`}
            ></div>
          </div>
          <div className="smaller-plate">
            <div
              className={`light ${zone === 'atp-4' ? lights.l2 : lights.l3}`}
            ></div>
            <div className={`light ${lights.l4}`}></div>
          </div>
          <div className="moonWhite-plate">
            <div className={`light ${lights.l5}`}></div>
          </div>
        </div>
        <Stripes aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};
export default BigSignal;
