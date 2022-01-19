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

export const setOfSigns = [
  {
    id: 1,
    components: [
      <SlowDownPermanent color="yellow" />,
      <SlowDownPermanent color="green" />,
    ],
  },
  {
    id: 2,
    components: [
      <SlowDownTemporary color="yellow" />,
      <SlowDownTemporary color="green" />,
    ],
  },
  {
    id: 3,
    components: [
      <DangerousPlaceBoundaries tempPole />,
      <DangerousPlaceBoundaries />,
      <DangerousPlaceBoundaries tempPole ending />,
      <DangerousPlaceBoundaries ending />,
    ],
  },
  {
    id: 4,
    components: [<Stop />, <StopNightTime />],
  },
  { id: 5, components: [<Horn />] },
  {
    id: 6,
    components: [
      <HandheldDisc />,
      <HandheldLight lightColor="green" gripColor="black" />,
    ],
  },
  {
    id: 7,
    components: [
      <HandheldFlag lightColor="yellow" />,
      <HandheldLight lightColor="yellow" />,
      <Hand path="slowDown" />,
      <HandheldLight lightColor="white" path="slowDown" />,
    ],
  },
  {
    id: 8,
    components: [
      <HandheldFlag lightColor="red" />,
      <HandheldLight lightColor="red" />,
      <Hand path="stop" />,
      <HandheldLight lightColor="white" path="stop" />,
    ],
  },
  {
    id: 9,
    components: [
      <HandheldFlag lightColor="yellow" folded />,
      <HandheldLight lightColor="white" />,
    ],
  },
  {
    id: 10,
    components: [
      <Hand path="startBreaking" />,
      <HandheldLight lightColor="white" path="startBreaking" />,
    ],
  },
  {
    id: 11,
    components: [
      <Hand path="endBreaking" />,
      <HandheldLight lightColor="white" path="endBreaking" />,
    ],
  },
];
