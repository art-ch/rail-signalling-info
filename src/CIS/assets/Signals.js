import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalWrapper,
} from './StyledComponentsForSignals';
import { renderSignal } from './LogicForSignals';

export const BiggestSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">{renderSignal(aspect)}</div>
    </SignalWrapper>
  );
};

export const BigSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">{renderSignal(aspect)}</div>
    </SignalWrapper>
  );
};

export const RegularSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <SignalWrapper>
      <div className="post">
        <div className="plate" style={{ marginTop: '0.5rem' }}>
          <div
            className={`light ${
              aspect === 'yellow'
                ? 'yellow'
                : aspect === 'yellow-flickering'
                ? 'yellow-flickering'
                : null
            }`}
          ></div>
          <div
            className={`light ${
              aspect === 'green'
                ? 'green'
                : aspect === 'green-flickering'
                ? 'green-flickering'
                : null
            }`}
          ></div>
          <div className={`light ${aspect === 'red' && 'red'}`}></div>
        </div>
      </div>
    </SignalWrapper>
  );
};

export const SmallSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <SignalWrapper>
      <div className="post">
        <div className="smallerPlate" style={{ marginTop: '0.5rem' }}>
          <div className={`light ${aspect === 'green' && 'green'}`}></div>
          <div className={`light ${aspect === 'red' && 'red'}`}></div>
        </div>
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
      <BiggestSignal aspect={aspect} />
      <DwarfManeuveringSignal aspect={aspect} />
    </CombinedSignalWrapper>
  );
};
