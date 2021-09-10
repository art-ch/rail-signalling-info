import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import {
  SignalWrapper,
  DwarfSignalWrapper,
} from '../inside-signal-cards-js/StyledComponentsForSignals';

export const DwarfSignal = ({ aspect, lights }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <DwarfSignalWrapper>
        <div className="dwarf-signal-plates">
          <div className="dwarf-signal-smaller-plate">
            <div className={`light ${lights.l5}`}></div>
            <div className={`light ${lights.l3}`}></div>
          </div>
          {zone === 'semi-atp' ? (
            <div className="dwarf-signal-smaller-plate">
              <div className={`light ${lights.l2}`}></div>
              <div className="light"></div>
            </div>
          ) : (
            <div className="dwarf-signal-plate">
              <div className={`light ${lights.l2}`}></div>
              <div className={`light ${lights.l1}`}></div>
              <div className={`light ${lights.l4}`}></div>
            </div>
          )}
        </div>
        <div className="horizontal-support"></div>
        <div className="vertical-support-container">
          <div className="vertical-support"></div>
          <div className="vertical-support"></div>
        </div>
      </DwarfSignalWrapper>
    </SignalWrapper>
  );
};

export default DwarfSignal;
