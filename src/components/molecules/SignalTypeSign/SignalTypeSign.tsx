import React from 'react';

import { Board } from 'src/components/atoms/Board';

import css from './SignalTypeSign.module.scss';

export type SignalTypeSignModes = 'default' | 'separateBoardForEachTextElement';

export type SignalTypeSignProps = {
  textElements: string[];
  mode?: SignalTypeSignModes;
};

export const SignalTypeSign = ({
  textElements,
  mode = 'default'
}: SignalTypeSignProps) => {
  const renderSign = () => {
    if (mode === 'separateBoardForEachTextElement') {
      return textElements.map((textElement, idx) => (
        <Board key={idx} className={css.singleTextElementBoard}>
          {textElement}
        </Board>
      ));
    }

    return <Board>{...textElements}</Board>;
  };

  return <div className={css.container}>{renderSign()}</div>;
};
