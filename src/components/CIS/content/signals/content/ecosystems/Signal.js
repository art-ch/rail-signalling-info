import React, { useContext } from 'react';
import { CISSignalContext } from '../../../../CISSignalContext';
import {
  BiggestSignal,
  BigSignal,
  RegularSignal,
  SmallSignal,
  InvitationalSignal,
  DwarfSignal,
  DwarfManeuveringSignal,
  DiamondShapedSignal
} from '../organisms/index';
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
  if (signalType === 'humping') {
    return <BigSignal aspect={aspect} lights={lights} />;
  }
  if (
    signalType === 'conditional' ||
    signalType === 'block' ||
    signalType === 'technological'
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
  if (
    aspect === 'moonWhite-flickering' ||
    aspect === 'red-moonWhite-flickering' ||
    signalType === 'invitational'
  ) {
    return (
      <CombinedSignalsWrapper className="combined-signals">
        <InvitationalSignal aspect={aspect} lights={lights} />
        <BiggestSignal aspect={aspect} lights={lights} />
      </CombinedSignalsWrapper>
    );
  }
  if (signalType === 'obstruction' || signalType === 'repeating') {
    return <DiamondShapedSignal aspect={aspect} lights={lights} />;
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
    } else if (id === 1 || id === 3 || id === 6 || id === 27 || id === 28) {
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <BiggestSignal aspect={aspect} lights={lights} />
          <DwarfSignal aspect={aspect} lights={lights} />
        </CombinedSignalsWrapper>
      );
    } else if (id >= 21 && id <= 26) {
      return <BigSignal aspect={aspect} lights={lights} />;
    } else if (id === 32 || id === 33) {
      return <DiamondShapedSignal id={id} />;
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
