import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalWrapper,
} from './StyledComponentsForSignals';

// TODO: try .test()

export const BigSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);

  // console.log({
  //   aspect,
  //   value:
  //     /three-yellows|yellow-green[^-flickering]|yellow-moonWhite[^-flickering]|two-yellows[^-flickering]|yellow/g.test(
  //       aspect
  //     ),
  // });

  return (
    <SignalWrapper>
      <div className="post">
        <div className="plates">
          <div className="plate">
            <div
              className={`light ${
                aspect === 'yellow' ||
                aspect === 'two-yellows' ||
                aspect === 'two-yellows-stripe' ||
                aspect === 'two-yellows-two-stripes' ||
                aspect === 'three-yellows' ||
                aspect === 'yellow-green' ||
                aspect === 'yellow-moonWhite'
                  ? 'yellow'
                  : aspect === 'yellow-flickering' ||
                    aspect === 'two-yellows-flickering' ||
                    aspect === 'two-yellows-flickering-stripe' ||
                    aspect === 'two-yellows-flickering-two-stripes' ||
                    aspect === 'yellow-moonWhite-flickering'
                  ? 'yellow-flickering'
                  : null
              }`}
            ></div>
            <div
              className={`light ${
                aspect === 'green' || aspect === 'green-moonWhite'
                  ? 'green'
                  : aspect === 'green-flickering' ||
                    aspect === 'green-flickering-yellow-stripe' ||
                    aspect === 'green-flickering-yellow-two-stripes'
                  ? 'green-flickering'
                  : null
              }`}
            ></div>
            <div
              className={`light ${
                aspect === 'red'
                  ? 'red'
                  : aspect === 'yellow-green'
                  ? 'green'
                  : aspect === 'three-yellows'
                  ? 'yellow'
                  : null
              }`}
            ></div>
          </div>
          <div className="smaller-plate">
            <div
              className={`light ${
                aspect === 'two-yellows' ||
                aspect === 'two-yellows-stripe' ||
                aspect === 'two-yellows-two-stripes' ||
                aspect === 'two-yellows-flickering' ||
                aspect === 'two-yellows-flickering-stripe' ||
                aspect === 'two-yellows-flickering-two-stripes' ||
                aspect === 'green-flickering-yellow-stripe' ||
                aspect === 'green-flickering-yellow-two-stripes'
                  ? 'yellow'
                  : null
              }`}
            ></div>
            <div
              className={`light ${
                aspect === 'moonWhite' ||
                aspect === 'green-moonWhite' ||
                aspect === 'yellow-moonWhite' ||
                aspect === 'yellow-moonWhite-flickering'
                  ? 'moon-white'
                  : aspect === 'three-yellows'
                  ? 'yellow'
                  : null
              }`}
            ></div>
          </div>
          {(aspect === 'two-yellows-stripe' ||
            aspect === 'two-yellows-flickering-stripe' ||
            aspect === 'green-flickering-yellow-stripe') && (
            <div className="green-line-container">
              <div className="green-line-light"></div>
              <div className="green-line-light"></div>
              <div className="green-line-light"></div>
            </div>
          )}
          {(aspect === 'two-yellows-two-stripes' ||
            aspect === 'two-yellows-flickering-two-stripes' ||
            aspect === 'green-flickering-yellow-two-stripes') && (
            <div>
              <div className="green-line-container">
                <div className="green-line-light"></div>
                <div className="green-line-light"></div>
                <div className="green-line-light"></div>
              </div>
              <div className="green-line-container">
                <div className="green-line-light"></div>
                <div className="green-line-light"></div>
                <div className="green-line-light"></div>
              </div>
            </div>
          )}
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
