import React from 'react';
import { SignWrapper } from './StyledComponentsForSigns';

const SlowDownTemporary = ({ color }) => {
  return (
    <SignWrapper innerFrameColor={color} tempSignPoleGradientColor={color}>
      <div className="temp-sign-pole">
        <div className="frame">
          <div className="colored-frame"></div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default SlowDownTemporary;
