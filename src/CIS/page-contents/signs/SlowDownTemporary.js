import React from 'react';
import { SignWrapper } from './StyledComponentsForSigns';

const SlowDownTemporary = ({ color }) => {
  return (
    <SignWrapper innerFrameColor={color} tempPole>
      <div className="pole">
        <div className="frame">
          <div className="colored-frame"></div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default SlowDownTemporary;
