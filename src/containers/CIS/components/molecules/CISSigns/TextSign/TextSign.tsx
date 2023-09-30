import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../CISSignRoot';

import { TextSignVariable } from './components/TextSignVariable';

import { TextSignProps } from './TextSign.types';

import css from './TextSign.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSignRoot.module.scss';

export const TextSign = (props: TextSignProps) => {
  const {
    textSignType = 'square',
    type = 'onCatenaryPole',
    pole = undefined,
    red = false
  } = props;

  const boardClassNameList = cx(css.frame, commonCISSignCSS.frame, {
    [commonCISSignCSS.catenaryPoleSign]: type === 'onCatenaryPole',
    [commonCISSignCSS.catenaryWireSign]: type === 'onCatenaryWire',
    [css.rectangular]: textSignType === 'rectangular',
    [css.rectangularOnPole]: textSignType === 'rectangular' && pole,
    [css.red]: red
  });

  return (
    <CISSign type={type} pole={pole}>
      <Board className={boardClassNameList}>
        <TextSignVariable
          textSignType={textSignType}
          type={type}
          red={red}
          {...props}
        />
      </Board>
    </CISSign>
  );
};
