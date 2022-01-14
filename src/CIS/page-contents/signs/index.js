import SlowDownPermanent from './SlowDownPermanent';
import SlowDownTemporary from './SlowDownTemporary';
import DangerousPlaceBoundaries from './DangerousPlaceBoundaries';
import Stop from './Stop';
import Horn from './Horn';
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
  { id: 4, component: <Stop /> },
  { id: 5, component: <Horn /> },
];
