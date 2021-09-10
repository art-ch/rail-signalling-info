import React from 'react';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import Stripes from '../inside-single-signals/Stripes';

const BiggestSignal = ({ aspect, lights }) => {
  // TODO: Try transforming each light into separate component
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <div className="plate">
            <div className={`light ${lights.l1}`}></div>
            <div
              className={`light ${
                aspect === 'yellow-green' ? lights.l3 : lights.l2
              }`}
            ></div>
            <div
              className={`light ${
                aspect === 'yellow-green' ? lights.l2 : lights.l3
              }`}
            ></div>
          </div>
          <div className="smaller-plate">
            <div className={`light ${lights.l4}`}></div>
            <div className={`light ${lights.l5}`}></div>
          </div>
        </div>
        <Stripes aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};
export default BiggestSignal;
