import React from 'react';

import { HandHeldSignProps } from './HandHeldSign.types';

import { isHandHeldSignWithProps } from './HandHeldSign.utils';
import { HandheldDisc } from './components/Disc';
import { HandheldFlag } from './components/Flag';
import { HandheldHorn } from './components/Horn';
import { HandheldLight } from './components/Light';

export const HandHeldSign = (props: HandHeldSignProps) => {
  const { type } = props;

  if (type === 'disc') {
    return <HandheldDisc />;
  }

  if (isHandHeldSignWithProps(props)) {
    switch (type) {
      case 'flag':
        return <HandheldFlag {...props.props} />;
      case 'light':
        return <HandheldLight {...props.props} />;
      case 'horn':
        return <HandheldHorn {...props.props} />;
    }
  }

  return null;
};
