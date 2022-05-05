import React from 'react';
import { SignWrapper } from './StyledComponentsForSigns';

const StopNightTime = () => {
  return (
    <SignWrapper lightColor="red" tempSignPoleSpecial>
      <div className="temp-sign-pole">
        <div className="light-frame">
          <div className="light"></div>
        </div>
      </div>
    </SignWrapper>
  );
};

export default StopNightTime;
