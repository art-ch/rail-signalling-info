import React from 'react';

import cx from 'classnames';

import { CISSign } from '../../../CISSignRoot';

import { HandheldFlagProps } from '../../HandHeldSign.types';

import css from './HandheldFlag.module.scss';

export const HandheldFlag = ({
  color,
  folded = false,
  ...props
}: HandheldFlagProps) => {
  return (
    <CISSign type="handheld" grip="default" rotation="deg315" {...props}>
      <div
        className={cx(css.fabric, css[color], {
          [css.unfolded]: !folded,
          [css.folded]: folded
        })}
      />
    </CISSign>
  );
};
