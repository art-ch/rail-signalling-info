import React from 'react';

import {
  HandheldFlagProps,
  HandheldHornProps,
  HandheldLightProps,
  HandHeldSignProps
} from './HandHeldSign.types';

import { HandheldDisc } from './components/Disc';
import { HandheldFlag } from './components/Flag';
import { HandheldHorn } from './components/Horn';
import { HandheldLight } from './components/Light';

export const HandHeldSign = ({ type, props }: HandHeldSignProps) => {
  switch (type) {
    case 'disc':
      return <HandheldDisc />;
    case 'flag':
      return <HandheldFlag {...(props as HandheldFlagProps)} />;
    case 'light':
      return <HandheldLight {...(props as HandheldLightProps)} />;
    case 'horn':
      return <HandheldHorn {...(props as HandheldHornProps)} />;
  }
};
