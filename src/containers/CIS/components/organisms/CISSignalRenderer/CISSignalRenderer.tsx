// remove ts comment after refactoring signals
// @ts-nocheck (lights are in fact compatible)

import { CombinedSignalsWrapper } from 'src/containers/CIS/content/signals/content/ecosystems/StyledComponentsForSignals';
import {
  BigSignal,
  SmallSignal,
  DwarfManeuveringSignal,
  RegularSignal,
  InvitationalSignal,
  BiggestSignal,
  DiamondShapedSignal,
  DwarfSignal
} from 'src/containers/CIS/content/signals/content/organisms';
import { useCISSignalContext } from 'src/containers/CIS/context';

import {
  CISTrainProtectionZone,
  CISSignalType
} from 'src/containers/CIS/context/CISSignalContext.types';

import { SignalLights } from 'src/types';

export type CISSignalRendererProps = {
  id: number;
  aspect: string;
  lights: SignalLights;
};

export const CISSignalRenderer = ({
  id,
  aspect,
  lights
}: CISSignalRendererProps) => {
  const {
    state: { trainProtectionZone, signalType }
  } = useCISSignalContext();

  // when sorted by signal type
  const blueSignal = aspect === 'blue';
  const humpingSignal = signalType === CISSignalType.Humping;

  const regularSignal =
    signalType === CISSignalType.Conditional ||
    signalType === CISSignalType.Block ||
    signalType === CISSignalType.Technological;

  const smallSignal =
    signalType === CISSignalType.Cover ||
    signalType === CISSignalType.Warning ||
    signalType === CISSignalType.Industrial;

  const invitationalSignal =
    aspect === 'moonWhite-flickering' ||
    aspect === 'red-moonWhite-flickering' ||
    signalType === CISSignalType.Invitational;

  const diamondShapedSignal =
    signalType === CISSignalType.Obstruction ||
    signalType === CISSignalType.Repeating;

  // when sorted by train protection zone
  const allSignalsShown = trainProtectionZone === CISTrainProtectionZone.All;
  const altpSignalsShown = trainProtectionZone === CISTrainProtectionZone.ALTP;

  const privateSignalsShown =
    trainProtectionZone === CISTrainProtectionZone.PrivateTP;

  const semiATPSignalsShown =
    trainProtectionZone === CISTrainProtectionZone.SemiATP;

  const atpSignalsShown =
    trainProtectionZone === CISTrainProtectionZone.ATP ||
    trainProtectionZone === CISTrainProtectionZone.ATP4;

  const moonWhiteSignal = aspect === 'moonWhite';

  const showWithBlockSignal =
    Object.values(lights).filter((light) => light !== null).length === 1;

  const showAsBiggestAndDwarfSignal =
    id === 1 || id === 3 || id === 6 || id === 27 || id === 28;

  const showAsBigSignal = id >= 21 && id <= 26;
  const showAsDiamondShapedSignal = id === 32 || id === 33;

  const showAsRegularFlickeringSignal =
    aspect === 'green-flickering' || aspect === 'yellow-flickering';

  const showAsCommonATPSignal =
    showWithBlockSignal || aspect === 'yellow-green';

  switch (true) {
    // when sorted by signal type
    case regularSignal:
      return <RegularSignal aspect={aspect} lights={lights} />;
    case smallSignal:
      return <SmallSignal aspect={aspect} lights={lights} />;
    case diamondShapedSignal:
      return <DiamondShapedSignal id={id} aspect={aspect} lights={lights} />;
    case humpingSignal:
      return <BigSignal aspect={aspect} lights={lights} />;
    case invitationalSignal:
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <InvitationalSignal aspect={aspect} lights={lights} />
          <BiggestSignal aspect={aspect} lights={lights} />
        </CombinedSignalsWrapper>
      );
    case blueSignal:
      return (
        <CombinedSignalsWrapper className="combined-signals">
          <SmallSignal aspect={aspect} lights={lights} />
          <DwarfManeuveringSignal aspect={aspect} />
        </CombinedSignalsWrapper>
      );

    // when sorted by train protection zone
    case allSignalsShown:
      switch (true) {
        case moonWhiteSignal:
          return (
            <CombinedSignalsWrapper className="combined-signals">
              <BiggestSignal aspect={aspect} lights={lights} />
              <DwarfSignal aspect={aspect} lights={lights} />
              <SmallSignal aspect={aspect} lights={lights} />
              <DwarfManeuveringSignal aspect={aspect} />
            </CombinedSignalsWrapper>
          );
        case showAsBiggestAndDwarfSignal:
          return (
            <CombinedSignalsWrapper className="combined-signals">
              <BiggestSignal aspect={aspect} lights={lights} />
              <DwarfSignal aspect={aspect} lights={lights} />
            </CombinedSignalsWrapper>
          );
        case showAsBigSignal:
          return <BigSignal aspect={aspect} lights={lights} />;
        case showAsDiamondShapedSignal:
          return (
            <DiamondShapedSignal id={id} aspect={aspect} lights={lights} />
          );
        default:
          return <BiggestSignal id={id} aspect={aspect} lights={lights} />;
      }

    case atpSignalsShown:
      switch (true) {
        case moonWhiteSignal:
          return (
            <CombinedSignalsWrapper className="combined-signals">
              <BigSignal aspect={aspect} lights={lights} />
              <DwarfSignal aspect={aspect} lights={lights} />
              <SmallSignal aspect={aspect} lights={lights} />
              <DwarfManeuveringSignal aspect={aspect} />
            </CombinedSignalsWrapper>
          );
        case showAsRegularFlickeringSignal:
          return <RegularSignal aspect={aspect} lights={lights} />;
        case showAsCommonATPSignal:
          return (
            <CombinedSignalsWrapper className="combined-signals">
              <RegularSignal aspect={aspect} lights={lights} />
              <BigSignal aspect={aspect} lights={lights} />
            </CombinedSignalsWrapper>
          );
        default:
          return <BigSignal aspect={aspect} lights={lights} />;
      }

    case semiATPSignalsShown:
      switch (true) {
        case moonWhiteSignal:
          return (
            <CombinedSignalsWrapper className="combined-signals">
              <BigSignal aspect={aspect} lights={lights} />
              <DwarfSignal aspect={aspect} lights={lights} />
              <SmallSignal aspect={aspect} lights={lights} />
              <DwarfManeuveringSignal aspect={aspect} />
            </CombinedSignalsWrapper>
          );
        case showWithBlockSignal:
          return (
            <CombinedSignalsWrapper className="combined-signals">
              <BigSignal aspect={aspect} lights={lights} />
              <SmallSignal aspect={aspect} lights={lights} />
              <DwarfSignal aspect={aspect} lights={lights} />
            </CombinedSignalsWrapper>
          );
        default:
          return <BigSignal aspect={aspect} lights={lights} />;
      }

    case altpSignalsShown:
      return <BigSignal aspect={aspect} lights={lights} />;

    case privateSignalsShown:
      return <BiggestSignal aspect={aspect} lights={lights} />;

    default:
      throw new Error(
        'Signals cannot be rendered without specified zone or signal type'
      );
  }
};
