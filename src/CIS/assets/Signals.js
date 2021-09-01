import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalWrapper,
} from './StyledComponentsForSignals';
import { renderLights, renderStripes } from './LogicForSignals';

export const BigSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);

  // continue work on logic refactor

  return (
    <SignalWrapper>
      <div className="post">
        <div className="plates">
          <div className="plate">
            {renderLights[0].map((fn, index) => {
              return <div className={`light ${fn(aspect)}`} key={index}></div>;
            })}
          </div>
          <div className="smaller-plate">
            {renderLights[1].map((fn, index) => {
              return <div className={`light ${fn(aspect)}`} key={index}></div>;
            })}
          </div>
          {renderStripes(aspect)}
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
      <BigSignal aspect={aspect} />
      <DwarfManeuveringSignal aspect={aspect} />
    </CombinedSignalWrapper>
  );
};
