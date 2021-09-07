import React, { useContext } from 'react';
import { CISSignalContext } from '../CISSignalContext';
import { aspects } from '../data';
import {
  SignalWrapper,
  DwarfManeuveringSignalWrapper,
  CombinedSignalWrapper,
} from './StyledComponentsForSignals';

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
    newAspects = [...aspects.slice(0, 14)];
  }
  if (zone === 'atp-4') {
    newAspects = [
      aspects[0],
      aspects[20],
      ...aspects.slice(2, 7),
      aspects[1],
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
            <Signal aspect={name} lights={lights} />
            <Description name={name} description={description} />
          </article>
        );
      })}
    </section>
  );
};

const Signal = ({ aspect, lights }) => {
  const { zone } = useContext(CISSignalContext);
  if (zone === 'all' || zone === 'main') {
    return <BiggestSignal aspect={aspect} lights={lights} />;
  }
  if (zone === 'atp' || zone === 'atp-4' || zone === 'semi-atp') {
    return <BigSignal aspect={aspect} lights={lights} />;
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
      <div className="post">
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
      </div>
    </SignalWrapper>
  );
};

export const BigSignal = ({ lights }) => {
  const { zone } = useContext(CISSignalContext);
  return (
    <SignalWrapper>
      <div className="post">
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
      </div>
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
          <div
            className={`light ${aspect === 'green' ? 'green' : 'moonWhite'}`}
          ></div>
          <div className={`light ${aspect === 'red' ? 'red' : 'blue'}`}></div>
        </div>
      </div>
    </SignalWrapper>
  );
};

export const DwarfSignal = ({ aspect }) => {
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

// const renderStripes = (aspect) => {
//   if (
//     aspect === 'two-yellows-stripe' ||
//     aspect === 'two-yellows-flickering-stripe' ||
//     aspect === 'green-flickering-yellow-stripe'
//   ) {
//     return (
//       <div className="green-line-container">
//         {Array.from(Array(3)).map((_, index) => {
//           return <div className="green-line-light" key={index}></div>;
//         })}
//       </div>
//     );
//   }
//   if (
//     aspect === 'two-yellows-two-stripes' ||
//     aspect === 'two-yellows-flickering-two-stripes' ||
//     aspect === 'green-flickering-yellow-two-stripes'
//   ) {
//     return Array.from(Array(2)).map((_, index) => {
//       return (
//         <div className="green-line-container" key={index}>
//           {Array.from(Array(3)).map((_, index) => {
//             return <div className="green-line-light" key={index}></div>;
//           })}
//         </div>
//       );
//     });
//   }
// };
