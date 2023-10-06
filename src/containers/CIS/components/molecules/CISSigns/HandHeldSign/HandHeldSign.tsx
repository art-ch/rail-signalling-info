import React from 'react';

import { HandheldDisc } from './components/Disc';
import { HandheldFlag } from './components/Flag';
import { HandheldHorn } from './components/Horn';
import { HandheldLight } from './components/Light';

import {
  HandheldFlagProps,
  HandheldHornProps,
  HandheldLightProps,
  HandHeldSignProps
} from './HandHeldSign.types';

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
