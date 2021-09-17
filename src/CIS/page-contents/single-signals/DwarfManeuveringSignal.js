import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
} from '../inside-signal-cards-js/StyledComponentsForSignals';

export const DwarfManeuveringSignal = ({ aspect }) => {
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