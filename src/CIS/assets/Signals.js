import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { aspects } from '../data';
import {
  SignalWrapper,
  DwarfSignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalsWrapper,
} from './StyledComponentsForSignals';

export const SignalCards = () => {
  const { zone } = useContext(CISSignalContext);
  let newAspects;
  if (zone === 'all') {
    newAspects = aspects;
  }
  if (zone === 'main') {
    newAspects = [...aspects.slice(0, 8)];
  }
  if (zone === 'fast') {
    newAspects = [...aspects.slice(8, 14)];
  }
  if (zone === 'atp') {
    newAspects = [...aspects.slice(0, 14)];
  }
  if (zone === 'atp-4') {
    newAspects = [aspects[0], aspects[14], aspects[20], ...aspects.slice(1, 8)];
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
            <Signal id={id} aspect={name} lights={lights} />
            <Description name={name} description={description} />
          </article>
        );
      })}
    </section>
  );
};

const Signal = ({ id, aspect, lights }) => {
  const { zone } = useContext(CISSignalContext);
  if (aspect === 'blue') {
    return (
      <CombinedSignalsWrapper className="combined-signals">
        <SmallSignal aspect={aspect} lights={lights} />
        <DwarfManeuveringSignal aspect={aspect} />
      </CombinedSignalsWrapper>
    );
  }
  if (zone === 'all' || zone === 'main' || zone === 'fast') {
    if (aspect === 'moonWhite') {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BiggestSignal aspect={aspect} lights={lights} />
          <DwarfSignal aspect={aspect} lights={lights} />
          <SmallSignal aspect={aspect} lights={lights} />
          <DwarfManeuveringSignal aspect={aspect} />
        </CombinedSignalsWrapper>
      );
    } else if (id === 1 || id === 3 || id === 6 || id === 20) {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BiggestSignal aspect={aspect} lights={lights} />
          <DwarfSignal aspect={aspect} lights={lights} />
        </CombinedSignalsWrapper>
      );
    } else {
      return <BiggestSignal aspect={aspect} lights={lights} />;
    }
  }
  if (zone === 'atp' || zone === 'atp-4') {
    if (aspect === 'moonWhite') {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BigSignal aspect={aspect} lights={lights} />
          <SmallSignal aspect={aspect} lights={lights} />
          <DwarfManeuveringSignal aspect={aspect} />
        </CombinedSignalsWrapper>
      );
    } else if (
      Object.values(lights).filter((light) => light !== null).length === 1 ||
      aspect === 'yellow-green'
    ) {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <RegularSignal aspect={aspect} lights={lights} />
          <BigSignal aspect={aspect} lights={lights} />
        </CombinedSignalsWrapper>
      );
    } else {
      return <BigSignal aspect={aspect} lights={lights} />;
    }
  }
  if (zone === 'semi-atp') {
    if (aspect === 'moonWhite') {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BigSignal aspect={aspect} lights={lights} />
          <DwarfSignal aspect={aspect} lights={lights} />
          <SmallSignal aspect={aspect} lights={lights} />
          <DwarfManeuveringSignal aspect={aspect} />
        </CombinedSignalsWrapper>
      );
    } else if (
      Object.values(lights).filter((light) => light !== null).length === 1
    ) {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BigSignal aspect={aspect} lights={lights} />
          <SmallSignal aspect={aspect} lights={lights} />
          <DwarfSignal aspect={aspect} lights={lights} />
        </CombinedSignalsWrapper>
      );
    } else {
      return <BigSignal aspect={aspect} lights={lights} />;
    }
  }
};

const Description = ({ name, description }) => {
  let newDescription;
  if (typeof description === 'string') {
    newDescription = (
      <div className="description-container" key={Math.random()}>
        <p>{description}</p>
      </div>
    );
  } else {
    newDescription = Object.entries(description).map(
      ([signalType, signalTypeDescription]) => {
        return (
          <div className="description-container" key={Math.random()}>
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

export const BiggestSignal = ({ aspect, lights }) => {
  // TODO: Try transforming each light into separate component
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <div className="plate">
            <div className={`light ${lights.l1}`}></div>
            <div
              className={`light ${
                aspect === 'yellow-green' ? lights.l3 : lights.l2
              }`}
            ></div>
            <div
              className={`light ${
                aspect === 'yellow-green' ? lights.l2 : lights.l3
              }`}
            ></div>
          </div>
          <div className="smaller-plate">
            <div className={`light ${lights.l4}`}></div>
            <div className={`light ${lights.l5}`}></div>
          </div>
        </div>
        <Stripes aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};

export const BigSignal = ({ aspect, lights }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="big-signal-post">
        <div className="plates">
          <div className="smaller-plate">
            <div className={`light ${lights.l1}`}></div>
            <div
              className={`light ${zone === 'atp-4' ? lights.l3 : lights.l2}`}
            ></div>
          </div>
          <div className="smaller-plate">
            <div
              className={`light ${zone === 'atp-4' ? lights.l2 : lights.l3}`}
            ></div>
            <div className={`light ${lights.l4}`}></div>
          </div>
          <div className="moonWhite-plate">
            <div className={`light ${lights.l5}`}></div>
          </div>
        </div>
        <Stripes aspect={aspect} />
      </div>
    </SignalWrapper>
  );
};

export const RegularSignal = ({ lights }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">
        <div className="plate" style={{ marginTop: '0.5rem' }}>
          <div className={`light ${lights.l1}`}></div>
          <div
            className={`light ${zone === 'atp-4' ? lights.l3 : lights.l2}`}
          ></div>
          <div
            className={`light ${zone === 'atp-4' ? lights.l2 : lights.l3}`}
          ></div>
        </div>
      </div>
    </SignalWrapper>
  );
};

export const SmallSignal = ({ aspect, lights }) => {
  const { zone } = useContext(CISSignalContext);

  return (
    <SignalWrapper>
      <div className="post">
        <div className="smaller-plate" style={{ marginTop: '0.5rem' }}>
          <div
            className={`light ${
              aspect === 'green'
                ? 'green'
                : aspect === 'moonWhite'
                ? 'moonWhite'
                : null
            }`}
          ></div>
          <div
            className={`light ${
              aspect === 'blue' ? 'blue' : aspect === 'red' ? 'red' : null
            }`}
          ></div>
        </div>
      </div>
    </SignalWrapper>
  );
};

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
        <div className="vertical-support"></div>
      </DwarfSignalWrapper>
    </SignalWrapper>
  );
};

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

const Stripes = ({ aspect }) => {
  if (
    aspect === 'two-yellows-stripe' ||
    aspect === 'two-yellows-flickering-stripe' ||
    aspect === 'green-flickering-yellow-stripe'
  ) {
    return (
      <div className="green-line-container">
        {Array.from(Array(3)).map((_, index) => {
          return <div className="green-line-light" key={index}></div>;
        })}
      </div>
    );
  } else if (
    aspect === 'two-yellows-two-stripes' ||
    aspect === 'two-yellows-flickering-two-stripes' ||
    aspect === 'green-flickering-yellow-two-stripes'
  ) {
    return Array.from(Array(2)).map((_, index) => {
      return (
        <div className="green-line-container" key={index}>
          {Array.from(Array(3)).map((_, index) => {
            return <div className="green-line-light" key={index}></div>;
          })}
        </div>
      );
    });
  } else {
    return null;
  }
};
