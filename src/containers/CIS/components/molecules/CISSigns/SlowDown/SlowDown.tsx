import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import { GradientPole } from '../CISSignRoot/components/GradientPole/GradientPole';

import { SlowDownProps } from './SlowDown.types';

import css from './SlowDown.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export const SlowDown = (props: SlowDownProps) => {
  const { temporary = false, innerFrameColor } = props;

  return (
    <GradientPole {...props}>
      <Board
        border="edgeThickStaggered"
        rounded={!temporary}
        className={cx(css.frame, commonCISSignCSS.frame)}
        innerFrameClassName={cx(
          css.innerFrame,
          commonCISSignCSS.coloredFrame,
          commonCISSignCSS[innerFrameColor]
        )}
      />
    </GradientPole>
  );
};
