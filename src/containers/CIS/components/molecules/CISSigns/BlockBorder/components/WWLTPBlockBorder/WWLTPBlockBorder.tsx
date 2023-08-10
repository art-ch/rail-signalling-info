import React from 'react';

import { SpecialBlockSignalBoard } from 'src/containers/CIS/components/atoms/SpecialBlockSignalBoard';
import { CISSign } from '../../../CISSignRoot';

export const WWLTPBlockBorder = () => (
  <CISSign type="onCatenaryPole">
    <SpecialBlockSignalBoard renderAsStandaloneSign />
  </CISSign>
);
