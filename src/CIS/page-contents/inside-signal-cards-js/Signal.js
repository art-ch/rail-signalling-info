import React, { useContext } from 'react';
import { CISSignalContext } from '../../CISSignalContext';
import {
  BiggestSignal,
  BigSignal,
  RegularSignal,
  SmallSignal,
  DwarfSignal,
  DwarfManeuveringSignal,
  ObstructionSignal,
  RepeatingSignal,
} from '../single-signals/index';
import { CombinedSignalsWrapper } from './StyledComponentsForSignals';

const Signal = ({ id, aspect, lights }) => {
  const { zone, signalType } = useContext(CISSignalContext);
  if (aspect === 'blue') {
    return (
      <CombinedSignalsWrapper className="combined-signals">
        <SmallSignal aspect={aspect} lights={lights} />
        <DwarfManeuveringSignal aspect={aspect} />
      </CombinedSignalsWrapper>
    );
  }
  if (
    signalType === 'conditional' ||
    signalType === 'block' ||
    signalType === 'technological' ||
    signalType === 'humping'
  ) {
    return <RegularSignal aspect={aspect} lights={lights} />;
  }
  if (
    signalType === 'cover' ||
    signalType === 'warning' ||
    signalType === 'industrial'
  ) {
    return <SmallSignal aspect={aspect} lights={lights} />;
  }
  if (signalType === 'obstruction') {
    return <ObstructionSignal aspect={aspect} lights={lights} />;
  }
  if (signalType === 'repeating') {
    return <RepeatingSignal aspect={aspect} lights={lights} />;
  }
  if (zone === 'all') {
    if (aspect === 'moonWhite') {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BiggestSignal aspect={aspect} lights={lights} />
          <DwarfSignal aspect={aspect} lights={lights} />
          <SmallSignal aspect={aspect} lights={lights} />
          <DwarfManeuveringSignal aspect={aspect} />
        </CombinedSignalsWrapper>
      );
    } else if (id === 1 || id === 3 || id === 6 || id === 27) {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BiggestSignal aspect={aspect} lights={lights} />
          <DwarfSignal aspect={aspect} lights={lights} />
        </CombinedSignalsWrapper>
      );
    } else if (id >= 21 && id <= 26) {
      return <BigSignal aspect={aspect} lights={lights} />;
    } else if (id === 31) {
      return <ObstructionSignal />;
    } else if (id === 32) {
      return <RepeatingSignal />;
    } else {
      return <BiggestSignal id={id} aspect={aspect} lights={lights} />;
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
      aspect === 'green-flickering' ||
      aspect === 'yellow-flickering'
    ) {
      return <RegularSignal aspect={aspect} lights={lights} />;
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
  if (zone === 'altp') {
    return <BigSignal aspect={aspect} lights={lights} />;
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
  if (zone === 'private') {
    return <BiggestSignal aspect={aspect} lights={lights} />;
  }
  throw new Error(
    'Signals cannot be rendered without specified zone or signal type'
  );
};

export default Signal;
