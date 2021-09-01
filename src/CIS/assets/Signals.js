import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalWrapper,
} from './StyledComponentsForSignals';
import { renderSignal } from './LogicForSignals';

export const BigSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <SignalWrapper>
      <div className="post">
        <div className="plates">{renderSignal(aspect)}</div>
      </div>
    </SignalWrapper>
  );
};

export const DwarfManeuveringSignal = ({ aspect }) => {
  return (
    <SignalWrapper>
      <DwarfManeuveringSignalWrapper>
        <div className="small-signal-plate">
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

export const CombinedSignals = ({ aspect }) => {
  return (
    <CombinedSignalWrapper className="combined-signals">
      <BigSignal aspect={aspect} />
      <DwarfManeuveringSignal aspect={aspect} />
    </CombinedSignalWrapper>
  );
};
