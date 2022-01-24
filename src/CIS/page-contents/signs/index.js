import SlowDownPermanent from './SlowDownPermanent';
import SlowDownTemporary from './SlowDownTemporary';
import DangerousPlaceBoundaries from './DangerousPlaceBoundaries';
import Stop from './Stop';
import StopNightTime from './StopNightTime';
import Horn from './Horn';
import Hand from './Hand';
import HandheldLight from './HandheldLight';
import HandheldFlag from './HandheldFlag';
import HandheldDisc from './HandheldDisc';
import RailSwitchSign from './RailSwitchSign';
import TrackObstruction from './TrackObstruction';

export const setOfSigns = [
  {
    id: 1,
    components: (
      <>
        <HandheldDisc />
        <HandheldLight lightColor="green" gripColor="black" />
      </>
    ),
  },
  {
    id: 2,
    components: (
      <>
        <HandheldFlag lightColor="yellow" folded />
        <HandheldLight lightColor="white" />
      </>
    ),
  },
  {
    id: 3,
    components: (
      <>
        <HandheldFlag lightColor="yellow" />
        <HandheldLight lightColor="yellow" />
      </>
    ),
  },
  {
    id: 4,
    components: (
      <>
        <HandheldFlag lightColor="red" />
        <HandheldLight lightColor="red" />
        <Hand path="stop" />
        <HandheldFlag lightColor="yellow" path="stop" />
        <HandheldLight lightColor="white" path="stop" />
      </>
    ),
  },
  {
    id: 5,
    components: (
      <>
        <HandheldFlag lightColor="yellow" path="driveForward" />
        <HandheldLight lightColor="white" path="driveForward" />
      </>
    ),
  },
  {
    id: 6,
    components: (
      <>
        <HandheldFlag lightColor="yellow" path="driveBackward" />
        <HandheldLight lightColor="white" path="driveBackward" />
      </>
    ),
  },
  {
    id: 7,
    components: (
      <>
        <Hand path="slowDown" />
        <HandheldFlag lightColor="yellow" path="slowDown" />
        <HandheldLight lightColor="white" path="slowDown" />
      </>
    ),
  },
  {
    id: 8,
    components: (
      <>
        <Hand path="startBreaking" />
        <HandheldLight lightColor="white" path="startBreaking" />
      </>
    ),
  },
  {
    id: 9,
    components: (
      <>
        <Hand path="endBreaking" />
        <HandheldLight lightColor="white" path="endBreaking" />
      </>
    ),
  },
  {
    id: 10,
    components: (
      <>
        <Hand path="endBreaking" />
        <Hand left />
        <HandheldLight lightColor="white" path="damagedCatenary" />
      </>
    ),
  },
  {
    id: 11,
    components: (
      <>
        <RailSwitchSign mode="straightDay" />
        <RailSwitchSign mode="straightNight" />
        <RailSwitchSign mode="straightAnalog" />
      </>
    ),
  },
  {
    id: 12,
    components: (
      <>
        <RailSwitchSign lightColor="grey" mode="divert" />
        <RailSwitchSign lightColor="orange" mode="divert" />
        <RailSwitchSign divertAnalog mode="divertAnalog" />
      </>
    ),
  },
  {
    id: 13,
    components: (
      <>
        <RailSwitchSign mode="straightDay" />
        <RailSwitchSign mode="straightDay" shrink />
        <RailSwitchSign mode="straightNight" />
        <RailSwitchSign mode="straightNight" shrink />
      </>
    ),
  },
  {
    id: 14,
    components: (
      <>
        <RailSwitchSign lightColor="grey" mode="divert" />
        <RailSwitchSign lightColor="grey" mode="divert" shrink />
        <RailSwitchSign lightColor="orange" mode="divert" />
        <RailSwitchSign lightColor="orange" mode="divert" shrink />
      </>
    ),
  },
  {
    id: 15,
    components: (
      <>
        <RailSwitchSign lightColor="grey" mode="divert" />
        <RailSwitchSign mode="straightDay" shrink />
        <RailSwitchSign lightColor="orange" mode="divert" />
        <RailSwitchSign mode="straightNight" shrink />
      </>
    ),
  },
  {
    id: 16,
    components: (
      <>
        <RailSwitchSign mode="straightDay" />
        <RailSwitchSign lightColor="grey" mode="divert" shrink />
        <RailSwitchSign mode="straightNight" />
        <RailSwitchSign lightColor="orange" mode="divert" shrink />
      </>
    ),
  },
  {
    id: 17,
    components: (
      <>
        <TrackObstruction />
        <TrackObstruction closed />
      </>
    ),
  },
  {
    id: 18,
    components: (
      <>
        <RailSwitchSign waterTowerDay lightColor="grey" mode="divert" />
        <RailSwitchSign lightColor="red" mode="divert" />
        <RailSwitchSign lightColor="white" mode="divert" />
      </>
    ),
  },
  {
    id: 19,
    components: (
      <>
        <SlowDownPermanent color="yellow" />
        <SlowDownPermanent color="green" />
      </>
    ),
  },
  {
    id: 20,
    components: (
      <>
        <SlowDownTemporary color="yellow" />
        <SlowDownTemporary color="green" />
      </>
    ),
  },
  {
    id: 21,
    components: (
      <>
        <DangerousPlaceBoundaries tempPole />
        <DangerousPlaceBoundaries />
        <DangerousPlaceBoundaries tempPole ending />
        <DangerousPlaceBoundaries ending />
      </>
    ),
  },
  {
    id: 22,
    components: (
      <>
        <Stop />
        <StopNightTime />
      </>
    ),
  },
  {
    id: 23,
    components: (
      <>
        <Horn tempSignPole />
        <Horn />
        <Horn catenaryPole />
      </>
    ),
  },
];
