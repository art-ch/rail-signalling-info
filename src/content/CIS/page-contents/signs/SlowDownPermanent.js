import React from 'react';
import { SignWrapper } from './StyledComponentsForSigns';

const SlowDownPermanent = ({ color }) => {
  return (
    <SignWrapper innerFrameColor={color} roundedFrame>
      <div className="pole">
        <div className="frame">
          <div className="colored-frame"></div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default SlowDownPermanent;
