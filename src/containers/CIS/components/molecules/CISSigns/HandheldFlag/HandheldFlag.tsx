import React from 'react';

import cx from 'classnames';

import { CISSign } from '../CISSignRoot';

import { AnimatedSignPath } from 'src/components/molecules/Sign/Sign.types';

import css from './HandheldFlag.module.scss';

type HandheldFlagColor = 'red' | 'yellow';

export type HandheldFlagProps = {
  color: HandheldFlagColor;
  folded?: boolean;
  animatedSignPath?: AnimatedSignPath;
};

export const HandheldFlag = ({
  color,
  folded = false,
  animatedSignPath
}: HandheldFlagProps) => {
  return (
    <CISSign
      type="handheld"
      rotation="deg315"
      animatedSignPath={animatedSignPath}
    >
      <div
        className={cx(css.fabric, css[color], {
          [css.unfolded]: !folded,
          [css.folded]: folded
        })}
      />
    </CISSign>
  );
};
