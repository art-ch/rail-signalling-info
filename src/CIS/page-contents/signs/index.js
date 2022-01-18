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
import { CombinedSignsWrapper } from './StyledComponentsForSigns';

export const setOfSigns = [
  {
    id: 1,
    component: (
      <CombinedSignsWrapper>
        <SlowDownPermanent color="yellow" />
        <SlowDownPermanent color="green" />
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 2,
    component: (
      <CombinedSignsWrapper>
        <SlowDownTemporary color="yellow" />
        <SlowDownTemporary color="green" />
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 3,
    component: (
      <CombinedSignsWrapper>
        <DangerousPlaceBoundaries />
        <DangerousPlaceBoundaries special />
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 4,
    component: (
      <CombinedSignsWrapper>
        <Stop />
        <StopNightTime />
      </CombinedSignsWrapper>
    ),
  },
  { id: 5, component: <Horn /> },
  {
    id: 6,
    component: (
      <CombinedSignsWrapper>
        <HandheldDisc />
        <HandheldLight color="green" />
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 7,
    component: (
      <CombinedSignsWrapper>
        <HandheldFlag color="yellow" />
        <HandheldLight color="yellow" />
        <Hand path="slowDown" />
        <HandheldLight color="white" path="slowDown" />
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 8,
    component: (
      <CombinedSignsWrapper>
        <HandheldFlag color="red" />
        <HandheldLight color="red" />
        <Hand path="stop" />
        <HandheldLight color="white" path="stop" />
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 9,
    component: (
      <CombinedSignsWrapper>
        <HandheldFlag color="yellow" folded />
        <HandheldLight color="white" />
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 10,
    component: (
      <CombinedSignsWrapper>
        <Hand path="startBreaking" />,
        <HandheldLight color="white" path="startBreaking" />,
      </CombinedSignsWrapper>
    ),
  },
  {
    id: 11,
    component: (
      <CombinedSignsWrapper>
        <Hand path="endBreaking" />,
        <HandheldLight color="white" path="endBreaking" />,
      </CombinedSignsWrapper>
    ),
  },
];
