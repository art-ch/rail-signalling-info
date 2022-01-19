import React from 'react';
import { SignWrapper } from './StyledComponentsForSigns';

const StopNightTime = () => {
  return (
    <SignWrapper lightColor="red" tempPole>
      <div className="pole">
        <div className="light-frame">
          <div className="light"></div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default StopNightTime;
