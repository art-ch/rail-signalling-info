import React, { useState } from 'react';
import {
  SignalWrapper,
  SmallSignalWrapper,
  CombinedSignalWrapper,
} from './StyledComponentsForSignals';

// TODO: try major refactor of signals using state

export const BigSignal = ({ aspect, flag }) => {
  return (
    <SignalWrapper aspect={aspect}>
      <div className="post">
        <div className="plates">
          <div className="plate">
            <div
              className={`light ${
                aspect === 'yellow' ||
                aspect === 'two-yellows' ||
                aspect === 'three-yellows' ||
                aspect === 'yellow-green' ||
                aspect === 'yellow-moonWhite'
                  ? 'yellow'
                  : aspect === 'yellow-flickering' ||
                    aspect === 'two-yellows-flickering' ||
                    aspect === 'yellow-moonWhite-flickering'
                  ? 'yellow-flickering'
                  : null
              }`}
            ></div>
            <div
              className={`light ${
                aspect === 'green'
                  ? 'green'
                  : aspect === 'green-flickering' ||
                    aspect === 'yellow-green-flickering'
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
                aspect === 'two-yellows-flickering' ||
                aspect === 'yellow-green-flickering'
                  ? 'yellow'
                  : null
              }`}
            ></div>
            <div
              className={`light ${
                aspect === 'moonWhite' ||
                aspect === 'yellow-moonWhite' ||
                aspect === 'yellow-moonWhite-flickering'
                  ? 'moon-white'
                  : aspect === 'three-yellows'
                  ? 'yellow'
                  : null
              }`}
            ></div>
          </div>
          {flag === 'fast' && (
            <div className="green-line-container">
              <div className="green-line"></div>
            </div>
          )}
          {flag === 'faster' && (
            <div>
              <div className="green-line-container">
                <div className="green-line"></div>
              </div>
              <div className="green-line-container">
                <div className="green-line"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SignalWrapper>
  );
};

export const SmallSignal = ({ aspect }) => {
  return (
    <SignalWrapper>
      <SmallSignalWrapper>
        <div className="small-signal-plate">
          <div
            className={`light ${aspect === 'moonWhite' && 'moon-white'}`}
          ></div>
          <div className={`light ${aspect === 'blue' && 'blue'}`}></div>
        </div>
        <div className="horizontal-support"></div>
        <div className="vertical-support"></div>
      </SmallSignalWrapper>
    </SignalWrapper>
  );
};

export const CombinedSignals = ({ aspect }) => {
  return (
    <CombinedSignalWrapper className="combined-signals">
      <BigSignal aspect={aspect} />
      <SmallSignal aspect={aspect} />
    </CombinedSignalWrapper>
  );
};
