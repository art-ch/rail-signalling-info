import React from 'react';

import cx from 'classnames';

import { RectangularTextSignProps } from '../../TextSign.types';

import css from '../../TextSign.module.scss';

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
