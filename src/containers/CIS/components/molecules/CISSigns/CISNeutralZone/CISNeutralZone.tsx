import React from 'react';

import { NeutralZoneAttention } from './components/NeutralZoneAttention';
import { NeutralZoneBoundaries } from './components/NeutralZoneBoundaries';

import {
  NeutralZoneAttentionProps,
  NeutralZoneBoundariesProps,
  CISNeutralZoneSignProps
} from './CISNeutralZone.types';

export const CISNeutralZone = ({
  neutralZoneSignType,
  ...props
}: CISNeutralZoneSignProps) => {
  switch (neutralZoneSignType) {
    case 'approach':
      return <NeutralZoneAttention {...(props as NeutralZoneAttentionProps)} />;
    case 'boundaries':
      return (
        <NeutralZoneBoundaries {...(props as NeutralZoneBoundariesProps)} />
      );
    default:
      throw new Error('Please pass type of neutral zone sign');
  }
};
