import { useCISSignalContext } from 'src/containers/CIS/context';

import { CISBiggestSignal } from '../CISSignals/CISBiggestSignal';
import { CISBigSignal } from '../CISSignals/CISBigSignal';
import { CISRegularSignal } from '../CISSignals/CISRegularSignal';
import { CISSmallSignal } from '../CISSignals/CISSmallSignal';
import { CISInvitationalSignal } from '../CISSignals/CISInvitationalSignal';
import { CISDiamondShapedSignal } from '../CISSignals/CISDiamondShapedSignal';
import { CISBigDwarfSignal } from '../CISSignals/CISBigDwarfSignal';
import { CISRegularDwarfSignal } from '../CISSignals/CISRegularDwarfSignal';
import { CISDwarfManeuveringSignal } from '../CISSignals/CISDwarfManeuveringSignal';

import {
  CISTrainProtectionZone,
  CISSignalType
} from 'src/containers/CIS/context/CISSignalContext.types';

import { SignalLights } from 'src/types';

import { SignalWrapper } from 'src/components/molecules/SignalWrapper';

import css from './CISSignalRenderer.module.scss';

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
    Object.values(lights).filter((light) => light !== 'turnedOff').length === 1;

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
      return (
        <SignalWrapper>
          <CISRegularSignal aspect={aspect} lights={lights} />
        </SignalWrapper>
      );
    case smallSignal:
      return (
        <SignalWrapper>
          <CISSmallSignal aspect={aspect} lights={lights} />
        </SignalWrapper>
      );
    case diamondShapedSignal:
      return (
        <SignalWrapper>
          <CISDiamondShapedSignal id={id} aspect={aspect} lights={lights} />
        </SignalWrapper>
      );
    case humpingSignal:
      return (
        <SignalWrapper>
          <CISBigSignal id={id} aspect={aspect} lights={lights} />
        </SignalWrapper>
      );
    case invitationalSignal:
      return (
        <SignalWrapper>
          <CISInvitationalSignal aspect={aspect} lights={lights} />
          <CISBiggestSignal id={id} aspect={aspect} lights={lights} />
        </SignalWrapper>
      );
    case blueSignal:
      return (
        <SignalWrapper>
          <CISSmallSignal aspect={aspect} lights={lights} />
          <CISDwarfManeuveringSignal aspect={aspect} />
        </SignalWrapper>
      );

    // when sorted by train protection zone
    case allSignalsShown:
      switch (true) {
        case moonWhiteSignal:
          return (
            <SignalWrapper className={css.moonWhiteSignalWrapper}>
              <SignalWrapper>
                <CISBiggestSignal id={id} aspect={aspect} lights={lights} />
                <CISBigDwarfSignal aspect={aspect} lights={lights} />
              </SignalWrapper>
              <SignalWrapper>
                <CISSmallSignal aspect={aspect} lights={lights} />
                <CISDwarfManeuveringSignal aspect={aspect} />
              </SignalWrapper>
            </SignalWrapper>
          );
        case showAsBiggestAndDwarfSignal:
          return (
            <SignalWrapper>
              <CISBiggestSignal id={id} aspect={aspect} lights={lights} />
              <CISBigDwarfSignal aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
        case showAsBigSignal:
          return (
            <SignalWrapper>
              <CISBigSignal id={id} aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
        case showAsDiamondShapedSignal:
          return (
            <SignalWrapper>
              <CISDiamondShapedSignal id={id} aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
        default:
          return (
            <SignalWrapper>
              <CISBiggestSignal id={id} aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
      }

    case atpSignalsShown:
      switch (true) {
        case moonWhiteSignal:
          return (
            <SignalWrapper className={css.moonWhiteSignalWrapper}>
              <SignalWrapper>
                <CISBigSignal id={id} aspect={aspect} lights={lights} />
                <CISBigDwarfSignal aspect={aspect} lights={lights} />
              </SignalWrapper>
              <SignalWrapper>
                <CISSmallSignal aspect={aspect} lights={lights} />
                <CISDwarfManeuveringSignal aspect={aspect} />
              </SignalWrapper>
            </SignalWrapper>
          );
        case showAsRegularFlickeringSignal:
          return (
            <SignalWrapper>
              <CISRegularSignal aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
        case showAsCommonATPSignal:
          return (
            <SignalWrapper>
              <CISRegularSignal aspect={aspect} lights={lights} />
              <CISBigSignal id={id} aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
        default:
          return (
            <SignalWrapper>
              <CISBigSignal id={id} aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
      }

    case semiATPSignalsShown:
      switch (true) {
        case moonWhiteSignal:
          return (
            <SignalWrapper className={css.moonWhiteSignalWrapper}>
              <SignalWrapper>
                <CISBigSignal id={id} aspect={aspect} lights={lights} />
                <CISRegularDwarfSignal aspect={aspect} lights={lights} />
              </SignalWrapper>
              <SignalWrapper>
                <CISSmallSignal aspect={aspect} lights={lights} />
                <CISDwarfManeuveringSignal aspect={aspect} />
              </SignalWrapper>
            </SignalWrapper>
          );
        case showWithBlockSignal:
          return (
            <SignalWrapper>
              <CISBigSignal id={id} aspect={aspect} lights={lights} />
              <CISSmallSignal aspect={aspect} lights={lights} />
              <CISRegularDwarfSignal aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
        default:
          return (
            <SignalWrapper>
              <CISBigSignal id={id} aspect={aspect} lights={lights} />
            </SignalWrapper>
          );
      }

    case altpSignalsShown:
      return (
        <SignalWrapper>
          <CISBigSignal id={id} aspect={aspect} lights={lights} />
        </SignalWrapper>
      );

    case privateSignalsShown:
      return (
        <SignalWrapper>
          <CISBiggestSignal id={id} aspect={aspect} lights={lights} />
        </SignalWrapper>
      );

    default:
      throw new Error(
        'Signals cannot be rendered without specified zone or signal type'
      );
  }
};
