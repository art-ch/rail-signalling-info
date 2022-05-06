import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../CISSignalContext';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper
} from '../ecosystems/StyledComponentsForSignals';
import { SignalTypeSign } from '../molecules';

const DwarfManeuveringSignal = ({ aspect }) => {
  const { signalType } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <DwarfManeuveringSignalWrapper>
        <div className="dwarf-maneuvering-signal-plate">
          <div
            className={`light ${aspect === 'moonWhite' && 'moon-white'}`}
          ></div>
          <div className={`light ${aspect === 'blue' && 'blue'}`}></div>
        </div>
        <div className="horizontal-support">
          <SignalTypeSign
            signalType={signalType}
            signalSize="dwarf-maneuvering"
          />
        </div>
        <div className="vertical-support"></div>
      </DwarfManeuveringSignalWrapper>
    </SignalWrapper>
  );
};

export default DwarfManeuveringSignal;