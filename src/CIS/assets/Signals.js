import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { aspects } from '../data';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalWrapper,
} from './StyledComponentsForSignals';
import { renderSignal } from './LogicForSignals';

export const Signals = () => {
  const { zone } = useContext(CISSignalContext);
  let newAspects;
  if (zone === 'all') {
    newAspects = aspects;
  }
  if (zone === 'main') {
    newAspects = aspects.slice(0, 8);
  }
  if (zone === 'atp') {
    newAspects = [
      aspects[0],
      aspects[1],
      ...aspects.slice(3, 14),
      aspects[2],
      aspects[14],
    ];
  }
  if (zone === 'atp-4') {
    newAspects = [
      aspects[0],
      aspects[20],
      aspects[1],
      ...aspects.slice(3, 14),
      aspects[2],
      aspects[14],
    ];
  }
  if (zone === 'semi-atp') {
    newAspects = [aspects[0], ...aspects.slice(3, 8)];
  }
  return (
    <section className="signals">
      {newAspects.map((aspect) => {
        const { id, name, lights, description } = aspect;
        return (
          <article className="signal-card" key={id}>
            <Signal lights={lights} />
            <Description name={name} description={description} />
          </article>
        );
      })}
    </section>
  );
};

const Signal = ({ lights }) => {
  console.log(lights);
  return <h1>Signal Component</h1>;
};

const Description = ({ name, description }) => {
  let newDescription;
  if (typeof description === 'string') {
    newDescription = (
      <div className="description-container">
        <p>{description}</p>
      </div>
    );
  } else {
    newDescription = Object.entries(description).map(
      ([signalType, signalTypeDescription]) => {
        return (
          <div className="description-container">
            <h3>{signalType}</h3>
            <p>{signalTypeDescription}</p>
          </div>
        );
      }
    );
  }
  return (
    <div className="information-container">
      <h3>{name}</h3>
      {newDescription}
    </div>
  );
};

export const BiggestSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">{renderSignal(aspect, zone, 'BiggestSignal')}</div>
    </SignalWrapper>
  );
};

export const BigSignal = ({ aspect }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">{renderSignal(aspect, zone, 'BigSignal')}</div>
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
