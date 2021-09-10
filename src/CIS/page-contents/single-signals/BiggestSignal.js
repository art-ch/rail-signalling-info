import React from 'react';
import { SignalWrapper } from '../inside-signal-cards-js/StyledComponentsForSignals';
import Stripes from '../inside-single-signals/Stripes';

const BiggestSignal = ({ aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  // TODO: Try transforming each light into separate component
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <div className="plate">
            <div className={`light ${l1}`}></div>
            <div
              className={`light ${aspect === 'yellow-green' ? l3 : l2}`}
            ></div>
            <div
              className={`light ${aspect === 'yellow-green' ? l2 : l3}`}
            ></div>
          </div>
          <div className="smaller-plate">
            <div className={`light ${l4}`}></div>
            <div className={`light ${l5}`}></div>
          </div>
        </div>
        <Stripes aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};
export default BiggestSignal;
