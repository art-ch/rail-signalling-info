import React from 'react';

import cx from 'classnames';

import { CISSign } from '../../../CISSignRoot';
import commonCISSignCSS from '../../../CISSignRoot/CISSignRoot.module.scss';

import css from './ALTPBlockBorder.module.scss';

export const ALTPBlockBorder = () => (
  <CISSign pole="permanent">
    <div className={cx(commonCISSignCSS.frame, css.frame, css.signFrame)}>
      <div className={css.signContent}>
        <div className={cx(css.line, css.straightLine)} />
        <div className={cx(css.line, css.leftLine)} />
        <div className={cx(css.line, css.rightLine)} />
      </div>
    </div>
    <div className={cx(commonCISSignCSS.frame, css.frame, css.numberFrame)}>
      <span>7</span>
    </div>
    <div className={cx(commonCISSignCSS.frame, css.frame, css.boxFrame)}>
      <div className={css.handle} />
    </div>
  </CISSign>
);
