import React from 'react';

import cx from 'classnames';

import css from '../../TextSign.module.scss';
import { RectangularTextSignProps } from '../../TextSign.types';

export const RectangularTextSign = ({
  text,
  type
}: RectangularTextSignProps) => (
  <h3
    className={cx(css.signText, css.signText_onRectangularSign, {
      [css.catenaryWireSignText]: type === 'onCatenaryWire'
    })}
  >
    {text}
  </h3>
);
