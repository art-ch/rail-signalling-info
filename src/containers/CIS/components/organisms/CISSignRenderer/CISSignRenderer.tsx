import React from 'react';

import { SignWrapper } from 'src/components/molecules/SignWrapper';

// import SlowDownPermanent from '../../../content/signs/content/SlowDownPermanent';
// import SlowDownTemporary from '../../../content/signs/content/SlowDownTemporary';
// import DangerousPlaceBoundaries from '../../../content/signs/content/DangerousPlaceBoundaries';
// import Stop from '../../../content/signs/content/Stop';
// import StopNightTime from '../../../content/signs/content/StopNightTime';
// import Horn from '../../../content/signs/content/Horn';
// import Hand from '../../../content/signs/content/Hand';
// import HandheldLightOld from '../../../content/signs/content/HandheldLight';
// import HandheldFlag from '../../../content/signs/content/HandheldFlag';
// import HandheldDisc from '../../../content/signs/content/HandheldDisc';
// import RailSwitchSign from '../../../content/signs/content/RailSwitchSign';
// import TrackObstruction from '../../../content/signs/content/TrackObstruction';
// import HotAxles from '../../../content/signs/content/HotAxles';
// import BlockBorderALTP from '../../../content/signs/content/BlockBorderALTP';
// import BlockBorderWWLTP from '../../../content/signs/content/BlockBorderWWLTP';
// import DropPantographOld from '../../../content/signs/content/DropPantograph';
// import NeutralZoneAttention from '../../../content/signs/content/NeutralZoneAttention';
import TurnOffCurrent from '../../../content/signs/content/TurnOffCurrent';
import TurnOnCurrent from '../../../content/signs/content/TurnOnCurrent';
import NeutralZoneOld from '../../../content/signs/content/NeutralZone';
import BoundaryPole from '../../../content/signs/content/BoundaryPole';
import { SignWithText } from '../../../content/signs/content/SignWithText';
import { SnowPlowSign } from '../../../content/signs/content/SnowPlowSign';
import BioHazardSign from '../../../content/signs/content/BioHazardSign';

// new imports
import { Hand } from '../../molecules/CISSigns/Hand';
import { RailSwitchSign } from '../../molecules/CISSigns/RailSwitchSign';
import { TrackObstruction } from '../../molecules/CISSigns/TrackObstruction';
import { SlowDown } from '../../molecules/CISSigns/SlowDown';
import { DangerousPlaceBoundaries } from '../../molecules/CISSigns/DangerousPlaceBoundaries';
import { Stop } from '../../molecules/CISSigns/Stop';
import { BlockBorder } from '../../molecules/CISSigns/BlockBorder';
import { HandHeldSign } from '../../molecules/CISSigns/HandHeldSign';
import { CISHorn } from '../../molecules/CISSigns/CISHorn';
import { CISHotAxles } from '../../molecules/CISSigns/CISHotAxles';
import { TogglePantograph } from '../../molecules/CISSigns/TogglePantograph';
import { CISNeutralZone } from '../../molecules/CISSigns/CISNeutralZone';

export type CISSignRendererProps = { id: number };

export const CISSignRenderer = ({ id }: CISSignRendererProps) => {
  switch (id) {
    case 1:
      return (
        <SignWrapper>
          <HandHeldSign type="disc" />
          <HandHeldSign type="light" props={{ lightColor: 'green' }} />
        </SignWrapper>
      );

    case 2:
      return (
        <SignWrapper>
          <HandHeldSign type="flag" props={{ color: 'yellow', folded: true }} />
          <HandHeldSign type="light" props={{ lightColor: 'white' }} />
        </SignWrapper>
      );

    case 3:
      return (
        <SignWrapper>
          <HandHeldSign type="flag" props={{ color: 'yellow' }} />
          <HandHeldSign type="light" props={{ lightColor: 'yellow' }} />
        </SignWrapper>
      );

    case 4:
      return (
        <SignWrapper>
          <HandHeldSign type="flag" props={{ color: 'red' }} />
          <HandHeldSign type="light" props={{ lightColor: 'red' }} />
          <Hand animatedSignPath="stop" />
          <HandHeldSign
            type="flag"
            props={{ color: 'yellow', animatedSignPath: 'stop' }}
          />
          <HandHeldSign
            type="light"
            props={{ lightColor: 'white', animatedSignPath: 'stop' }}
          />
        </SignWrapper>
      );

    case 5:
      return (
        <SignWrapper>
          <HandHeldSign
            type="flag"
            props={{ color: 'yellow', animatedSignPath: 'driveForward' }}
          />
          <HandHeldSign
            type="light"
            props={{ lightColor: 'white', animatedSignPath: 'driveForward' }}
          />
        </SignWrapper>
      );

    case 6:
      return (
        <SignWrapper>
          <HandHeldSign
            type="flag"
            props={{ color: 'yellow', animatedSignPath: 'driveBackward' }}
          />
          <HandHeldSign
            type="light"
            props={{ lightColor: 'white', animatedSignPath: 'driveBackward' }}
          />
        </SignWrapper>
      );

    case 7:
      return (
        <SignWrapper>
          <Hand animatedSignPath="slowDown" />
          <HandHeldSign
            type="flag"
            props={{ color: 'yellow', animatedSignPath: 'slowDown' }}
          />
          <HandHeldSign
            type="light"
            props={{ lightColor: 'white', animatedSignPath: 'slowDown' }}
          />
        </SignWrapper>
      );

    case 8:
      return (
        <SignWrapper>
          <Hand animatedSignPath="startBreaking" />
          <HandHeldSign
            type="light"
            props={{ lightColor: 'white', animatedSignPath: 'startBreaking' }}
          />
        </SignWrapper>
      );

    case 9:
      return (
        <SignWrapper>
          <Hand animatedSignPath="endBreaking" />
          <HandHeldSign
            type="light"
            props={{ lightColor: 'white', animatedSignPath: 'endBreaking' }}
          />
        </SignWrapper>
      );

    case 10:
      return (
        <SignWrapper>
          <Hand animatedSignPath="endBreaking" />
          <Hand left />
          <HandHeldSign
            type="light"
            props={{ lightColor: 'white', animatedSignPath: 'damagedCatenary' }}
          />
        </SignWrapper>
      );

    case 11:
      return (
        <SignWrapper>
          <RailSwitchSign mode="straightDay" />
          <RailSwitchSign mode="straightNight" />
          <RailSwitchSign mode="straightAnalog" />
        </SignWrapper>
      );

    case 12:
      return (
        <SignWrapper>
          <RailSwitchSign lightColor="turnedOff" mode="divert" />
          <RailSwitchSign lightColor="yellow" mode="divert" />
          <RailSwitchSign mode="divertAnalog" />
        </SignWrapper>
      );

    case 13:
      return (
        <SignWrapper>
          <RailSwitchSign mode="straightDay" />
          <RailSwitchSign mode="straightDay" atDistance />
          <RailSwitchSign mode="straightNight" />
          <RailSwitchSign mode="straightNight" atDistance />
        </SignWrapper>
      );

    case 14:
      return (
        <SignWrapper>
          <RailSwitchSign lightColor="turnedOff" mode="divert" />
          <RailSwitchSign lightColor="turnedOff" mode="divert" atDistance />
          <RailSwitchSign lightColor="yellow" mode="divert" />
          <RailSwitchSign lightColor="yellow" mode="divert" atDistance />
        </SignWrapper>
      );

    case 15:
      return (
        <SignWrapper>
          <RailSwitchSign lightColor="turnedOff" mode="divert" />
          <RailSwitchSign mode="straightDay" atDistance />
          <RailSwitchSign lightColor="yellow" mode="divert" />
          <RailSwitchSign mode="straightNight" atDistance />
        </SignWrapper>
      );

    case 16:
      return (
        <SignWrapper>
          <RailSwitchSign mode="straightDay" />
          <RailSwitchSign lightColor="turnedOff" mode="divert" atDistance />
          <RailSwitchSign mode="straightNight" />
          <RailSwitchSign lightColor="yellow" mode="divert" atDistance />
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
          <RailSwitchSign lightColor="turnedOff" mode="divert" />
          <RailSwitchSign lightColor="red" mode="divert" />
          <RailSwitchSign lightColor="white" mode="divert" />
        </SignWrapper>
      );

    case 19:
      return (
        <SignWrapper>
          <SlowDown mainColor="yellow" />
          <SlowDown mainColor="green" />
        </SignWrapper>
      );

    case 20:
      return (
        <SignWrapper>
          <SlowDown temporary mainColor="yellow" />
          <SlowDown temporary mainColor="green" />
        </SignWrapper>
      );

    case 21:
      return (
        <SignWrapper>
          <DangerousPlaceBoundaries temporary />
          <DangerousPlaceBoundaries />
          <DangerousPlaceBoundaries temporary ending />
          <DangerousPlaceBoundaries ending />
        </SignWrapper>
      );

    case 22:
      return (
        <SignWrapper>
          <Stop />
          <Stop nightTime />
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
          <CISHorn pole="temporary" />
          <CISHorn pole="permanent" />
          <CISHorn type="onCatenaryPole" />
        </SignWrapper>
      );

    case 25:
      return (
        <SignWrapper>
          <BlockBorder type="altp" />
        </SignWrapper>
      );

    case 26:
      return (
        <SignWrapper>
          <BlockBorder type="wwltp" />
        </SignWrapper>
      );

    case 27:
      return (
        <SignWrapper>
          <CISHotAxles />
          <CISHotAxles turnedOn />
        </SignWrapper>
      );

    case 28:
      return (
        <SignWrapper>
          <TogglePantograph />
          <TogglePantograph turnedOn />
          <TogglePantograph type="standalone" />
          <TogglePantograph type="standalone" turnedOn />
        </SignWrapper>
      );

    case 29:
      return (
        <SignWrapper>
          <CISNeutralZone neutralZoneSignType="approach" />
          <CISNeutralZone neutralZoneSignType="approach" type="standalone" />
        </SignWrapper>
      );

    case 30:
      return (
        <SignWrapper>
          <TogglePantograph raise />
          <TogglePantograph type="standalone" raise />
          <TogglePantograph raise doubled />
          <TogglePantograph type="standalone" raise doubled />
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
          <CISNeutralZone neutralZoneSignType="boundaries" ending />
          <CISNeutralZone neutralZoneSignType="boundaries" />
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
