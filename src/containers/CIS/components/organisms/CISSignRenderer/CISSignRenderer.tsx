import React from 'react';

import { SignWrapper } from 'src/components/molecules/SignWrapper';

// import SlowDownPermanent from '../../../content/signs/content/SlowDownPermanent';
// import SlowDownTemporary from '../../../content/signs/content/SlowDownTemporary';
import DangerousPlaceBoundaries from '../../../content/signs/content/DangerousPlaceBoundaries';
import Stop from '../../../content/signs/content/Stop';
import StopNightTime from '../../../content/signs/content/StopNightTime';
import Horn from '../../../content/signs/content/Horn';
// import Hand from '../../../content/signs/content/Hand';
// import HandheldLightOld from '../../../content/signs/content/HandheldLight';
// import HandheldFlag from '../../../content/signs/content/HandheldFlag';
// import HandheldDisc from '../../../content/signs/content/HandheldDisc';
// import RailSwitchSign from '../../../content/signs/content/RailSwitchSign';
// import TrackObstruction from '../../../content/signs/content/TrackObstruction';
import HotAxles from '../../../content/signs/content/HotAxles';
import BlockBorderALTP from '../../../content/signs/content/BlockBorderALTP';
import BlockBorderWWLTP from '../../../content/signs/content/BlockBorderWWLTP';
import DropPantograph from '../../../content/signs/content/DropPantograph';
import NeutralZoneAttention from '../../../content/signs/content/NeutralZoneAttention';
import TurnOffCurrent from '../../../content/signs/content/TurnOffCurrent';
import TurnOnCurrent from '../../../content/signs/content/TurnOnCurrent';
import NeutralZone from '../../../content/signs/content/NeutralZone';
import BoundaryPole from '../../../content/signs/content/BoundaryPole';
import { SignWithText } from '../../../content/signs/content/SignWithText';
import { SnowPlowSign } from '../../../content/signs/content/SnowPlowSign';
import BioHazardSign from '../../../content/signs/content/BioHazardSign';

// new imports
import { HandheldDisc } from '../../molecules/CISSigns/HandheldDisc';
import { HandheldLight } from '../../molecules/CISSigns/HandheldLight';
import { HandheldFlag } from '../../molecules/CISSigns/HandheldFlag';
import { Hand } from '../../molecules/CISSigns/Hand';
import { CISRailSwitchSign } from '../../molecules/CISSigns/CISRailSwitchSign';
import { TrackObstruction } from '../../molecules/CISSigns/TrackObstruction';
import { SlowDown } from '../../molecules/CISSigns/SlowDown';

export type CISSignRendererProps = { id: number };

export const CISSignRenderer = ({ id }: CISSignRendererProps) => {
  switch (id) {
    case 1:
      return (
        <SignWrapper>
          <HandheldDisc />
          <HandheldLight lightColor="green" />
        </SignWrapper>
      );

    case 2:
      return (
        <SignWrapper>
          <HandheldFlag color="yellow" folded />
          <HandheldLight lightColor="white" />
        </SignWrapper>
      );

    case 3:
      return (
        <SignWrapper>
          <HandheldFlag color="yellow" />
          <HandheldLight lightColor="yellow" />
        </SignWrapper>
      );

    case 4:
      return (
        <SignWrapper>
          <HandheldFlag color="red" />
          <HandheldLight lightColor="red" />
          <Hand animatedSignPath="stop" />
          <HandheldFlag color="yellow" animatedSignPath="stop" />
          <HandheldLight lightColor="white" animatedSignPath="stop" />
        </SignWrapper>
      );

    case 5:
      return (
        <SignWrapper>
          <HandheldFlag color="yellow" animatedSignPath="driveForward" />
          <HandheldLight lightColor="white" animatedSignPath="driveForward" />
        </SignWrapper>
      );

    case 6:
      return (
        <SignWrapper>
          <HandheldFlag color="yellow" animatedSignPath="driveBackward" />
          <HandheldLight lightColor="white" animatedSignPath="driveBackward" />
        </SignWrapper>
      );

    case 7:
      return (
        <SignWrapper>
          <Hand animatedSignPath="slowDown" />
          <HandheldFlag color="yellow" animatedSignPath="slowDown" />
          <HandheldLight lightColor="white" animatedSignPath="slowDown" />
        </SignWrapper>
      );

    case 8:
      return (
        <SignWrapper>
          <Hand animatedSignPath="startBreaking" />
          <HandheldLight lightColor="white" animatedSignPath="startBreaking" />
        </SignWrapper>
      );

    case 9:
      return (
        <SignWrapper>
          <Hand animatedSignPath="endBreaking" />
          <HandheldLight lightColor="white" animatedSignPath="endBreaking" />
        </SignWrapper>
      );

    case 10:
      return (
        <SignWrapper>
          <Hand animatedSignPath="endBreaking" />
          <Hand left />
          <HandheldLight
            lightColor="white"
            animatedSignPath="damagedCatenary"
          />
        </SignWrapper>
      );

    case 11:
      return (
        <SignWrapper>
          <CISRailSwitchSign mode="straightDay" />
          <CISRailSwitchSign mode="straightNight" />
          <CISRailSwitchSign mode="straightAnalog" />
        </SignWrapper>
      );

    case 12:
      return (
        <SignWrapper>
          <CISRailSwitchSign lightColor="turnedOff" mode="divert" />
          <CISRailSwitchSign lightColor="yellow" mode="divert" />
          <CISRailSwitchSign mode="divertAnalog" />
        </SignWrapper>
      );

    case 13:
      return (
        <SignWrapper>
          <CISRailSwitchSign mode="straightDay" />
          <CISRailSwitchSign mode="straightDay" atDistance />
          <CISRailSwitchSign mode="straightNight" />
          <CISRailSwitchSign mode="straightNight" atDistance />
        </SignWrapper>
      );

    case 14:
      return (
        <SignWrapper>
          <CISRailSwitchSign lightColor="turnedOff" mode="divert" />
          <CISRailSwitchSign lightColor="turnedOff" mode="divert" atDistance />
          <CISRailSwitchSign lightColor="yellow" mode="divert" />
          <CISRailSwitchSign lightColor="yellow" mode="divert" atDistance />
        </SignWrapper>
      );

    case 15:
      return (
        <SignWrapper>
          <CISRailSwitchSign lightColor="turnedOff" mode="divert" />
          <CISRailSwitchSign mode="straightDay" atDistance />
          <CISRailSwitchSign lightColor="yellow" mode="divert" />
          <CISRailSwitchSign mode="straightNight" atDistance />
        </SignWrapper>
      );

    case 16:
      return (
        <SignWrapper>
          <CISRailSwitchSign mode="straightDay" />
          <CISRailSwitchSign lightColor="turnedOff" mode="divert" atDistance />
          <CISRailSwitchSign mode="straightNight" />
          <CISRailSwitchSign lightColor="yellow" mode="divert" atDistance />
        </SignWrapper>
      );

    case 17:
      return (
        <SignWrapper>
          <TrackObstruction />
          <TrackObstruction closed />
        </SignWrapper>
      );

    case 18:
      return (
        <SignWrapper>
          <CISRailSwitchSign lightColor="turnedOff" mode="divert" />
          <CISRailSwitchSign lightColor="red" mode="divert" />
          <CISRailSwitchSign lightColor="white" mode="divert" />
        </SignWrapper>
      );

    case 19:
      return (
        <SignWrapper>
          <SlowDown innerFrameColor="yellow" />
          <SlowDown innerFrameColor="green" />
        </SignWrapper>
      );

    case 20:
      return (
        <SignWrapper>
          <SlowDown
            temporary
            poleGradientColor="yellow"
            innerFrameColor="yellow"
          />
          <SlowDown
            temporary
            poleGradientColor="green"
            innerFrameColor="green"
          />
        </SignWrapper>
      );

    case 21:
      return (
        <SignWrapper>
          <DangerousPlaceBoundaries tempPole />
          <DangerousPlaceBoundaries />
          <DangerousPlaceBoundaries tempPole ending />
          <DangerousPlaceBoundaries ending />
        </SignWrapper>
      );

    case 22:
      return (
        <SignWrapper>
          <Stop />
          <StopNightTime />
        </SignWrapper>
      );

    case 23:
      return (
        <SignWrapper>
          <SnowPlowSign getReady />
          <SnowPlowSign />
          <SnowPlowSign doubled />
          <SnowPlowSign cut />
        </SignWrapper>
      );

    case 24:
      return (
        <SignWrapper>
          <Horn tempSignPole />
          <Horn />
          <Horn catenaryPole />
        </SignWrapper>
      );

    case 25:
      return (
        <SignWrapper>
          <BlockBorderALTP />
        </SignWrapper>
      );

    case 26:
      return (
        <SignWrapper>
          <BlockBorderWWLTP />
        </SignWrapper>
      );

    case 27:
      return (
        <SignWrapper>
          <HotAxles />
          <HotAxles turnedOn />
        </SignWrapper>
      );

    case 28:
      return (
        <SignWrapper>
          <DropPantograph innerFrameColor="black" />
          <DropPantograph innerFrameColor="black" turnedOn />
          <DropPantograph innerFrameColor="#3c86c3" tempSignPoleSpecial />
          <DropPantograph
            innerFrameColor="#3c86c3"
            tempSignPoleSpecial
            turnedOn
          />
        </SignWrapper>
      );

    case 29:
      return (
        <SignWrapper>
          <NeutralZoneAttention innerFrameColor="black" />
          <NeutralZoneAttention innerFrameColor="#3c86c3" tempSignPoleSpecial />
        </SignWrapper>
      );

    case 30:
      return (
        <SignWrapper>
          <DropPantograph raise innerFrameColor="black" />
          <DropPantograph raise innerFrameColor="#3c86c3" tempSignPoleSpecial />
          <DropPantograph raise innerFrameColor="black" doubled />
          <DropPantograph
            raise
            innerFrameColor="#3c86c3"
            tempSignPoleSpecial
            doubled
          />
        </SignWrapper>
      );

    case 31:
      return (
        <SignWrapper>
          <TurnOffCurrent innerFrameColor="#3c86c3" />
        </SignWrapper>
      );

    case 32:
      return (
        <SignWrapper>
          <TurnOnCurrent innerFrameColor="#3c86c3" />
          <TurnOnCurrent innerFrameColor="#3c86c3" doubled />
        </SignWrapper>
      );

    case 33:
      return (
        <SignWrapper>
          <NeutralZone ending />
          <NeutralZone />
        </SignWrapper>
      );

    case 34:
      return (
        <SignWrapper>
          <BoundaryPole />
          <BoundaryPole branch />
        </SignWrapper>
      );

    case 35:
      return (
        <SignWrapper>
          <SignWithText
            pole="catenary-pole"
            exclamation
            line="diagonal-line"
            text="Газ"
          />
          <SignWithText
            pole="catenary-pole"
            exclamation
            line="diagonal-line"
            text="Нафта"
          />
          <SignWithText
            pole="catenary-pole"
            line="horizontal-line"
            text="Карст"
          />
          <SignWithText
            pole="catenary-pole"
            line="vertical-line"
            text="Карст"
          />
        </SignWrapper>
      );

    case 36:
      return (
        <SignWrapper>
          <SignWithText pole="catenary-pole" text="НТ" red />
          <SignWithText pole="catenary-pole" text="КТ" />
        </SignWrapper>
      );

    case 37:
      return (
        <SignWrapper>
          <SignWithText pole="pole" rectangular text="МЕЖА СТАНЦІЇ" />
          <SignWithText pole="pole" rectangular text="МЕЖА ПІД'ЇЗНОЇ КОЛІЇ" />
        </SignWrapper>
      );

    case 38:
      return (
        <SignWrapper>
          <SignWithText pole="pole" rectangular text="ЗУПИНКА ЛОКОМОТИВА" />
          <SignWithText pole="pole" rectangular text="ЗУПИНКА ПЕРШОГО ВАГОНА" />
        </SignWrapper>
      );

    case 39:
      return (
        <SignWrapper>
          <SignWithText
            rectangular
            catenarySign
            text="ПЕРЕХОД НА БОКОВУЮ КОНТАКТНУЮ СЕТЬ"
          />
          <SignWithText
            rectangular
            catenarySign
            text="ПЕРЕХОД НА ЦЕНТРАЛЬНУЮ КОНТАКТНУЮ СЕТЬ"
          />
          <SignWithText rectangular catenarySign text="КОНЕЦ КОНТАКТНОЙ СЕТИ" />
        </SignWrapper>
      );

    case 40:
      return (
        <SignWrapper>
          <BioHazardSign front />
          <BioHazardSign sideWays />
          <BioHazardSign fromBehind />
        </SignWrapper>
      );

    default:
      throw new Error('Signs cannot be rendered without specified id');
  }
};
