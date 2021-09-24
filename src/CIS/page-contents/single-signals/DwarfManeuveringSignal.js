import React from 'react';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
} from '../inside-signal-cards-js/StyledComponentsForSignals';

const DwarfManeuveringSignal = ({ aspect }) => {
  return (
    <SignalWrapper>
      <DwarfManeuveringSignalWrapper>
        <div className="dwarf-maneuvering-signal-plate">
          <div
            className={`light ${aspect === 'moonWhite' && 'moon-white'}`}
          ></div>
          <div className={`light ${aspect === 'blue' && 'blue'}`}></div>
        </div>
        <div className="horizontal-support"></div>
        <div className="vertical-support"></div>
      </DwarfManeuveringSignalWrapper>
    </SignalWrapper>
  );
};

export default DwarfManeuveringSignal;
