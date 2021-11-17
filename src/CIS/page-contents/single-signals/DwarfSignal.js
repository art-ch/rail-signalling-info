import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import {
  SignalWrapper,
  DwarfSignalWrapper,
} from '../inside-signal-cards-js/StyledComponentsForSignals';
import { SignalTypeSign } from '../inside-single-signals/';

export const DwarfSignal = ({ aspect, lights: { l1, l2, l3, l4, l5 } }) => {
  const { zone, signalType } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <DwarfSignalWrapper>
        <div className="dwarf-signal-plates">
          <div className="dwarf-signal-smaller-plate">
            <div className={`light ${l5}`}></div>
            <div
              className={`light ${
                aspect === 'two-yellows-special' ? null : l3
              }`}
            ></div>
          </div>
          {zone === 'semi-atp' ? (
            <div className="dwarf-signal-smaller-plate">
              <div className={`light ${l2}`}></div>
              <div className="light"></div>
            </div>
          ) : (
            <div className="dwarf-signal-plate">
              <div
                className={`light ${
                  aspect === 'two-yellows-special' ? l1 : l2
                }`}
              ></div>
              <div
                className={`light ${
                  aspect === 'two-yellows-special' ? null : l1
                }`}
              ></div>
              <div
                className={`light ${
                  aspect === 'two-yellows-special' ? l3 : l4
                }`}
              ></div>
            </div>
          )}
        </div>
        <div className="horizontal-support">
          <SignalTypeSign
            aspect={aspect}
            signalType={signalType}
            signalSize="dwarf"
          />
        </div>
        <div className="vertical-support-container">
          <div className="vertical-support"></div>
          <div className="vertical-support"></div>
        </div>
      </DwarfSignalWrapper>
    </SignalWrapper>
  );
};

export default DwarfSignal;
