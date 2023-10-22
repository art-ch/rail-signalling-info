import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../../../CISSignRoot';

import commonCISSignCSS from '../../../CISSignRoot/CISSignRoot.module.scss';
import { NeutralZoneAttentionProps } from '../../CISNeutralZone.types';

import css from './NeutralZoneAttention.module.scss';

export const NeutralZoneAttention = ({
  type = 'onCatenaryPole'
}: NeutralZoneAttentionProps) => {
  const temporarySign = type === 'standalone';
  const temporarySignClassName = {
    [css.temporary]: temporarySign
  };

  const pole = temporarySign ? 'temporary' : undefined;

  return (
    <CISSign type={type} pole={pole}>
      <Board
        border="edgeThickStaggered"
        className={cx(
          css.frame,
          commonCISSignCSS.frame,
          commonCISSignCSS.diamondFrame,
          temporarySignClassName
        )}
        innerFrameClassName={cx(css.innerFrame, temporarySignClassName)}
      >
        <div className={css.signContent}>
          <div className={cx(css.shortLine, css.shortLine_upper)} />
          <div className={css.shortLine} />
        </div>
      </Board>
    </CISSign>
  );
};
