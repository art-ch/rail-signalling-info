import React from 'react';

import cx from 'classnames';

import { Board } from 'src/components/atoms/Board';
import { UIComponent } from 'src/types';

import css from './SignalTypeSign.module.scss';

export type SignalTypeSignOptions = {
  separateBoardForEachTextElement: boolean;
  placeElementsHorizontally: boolean;
};

export type SignalTypeSignProps = {
  textElements: string[];
  options?: SignalTypeSignOptions;
} & UIComponent;

export const SignalTypeSign = ({
  textElements,
  options,
  className
}: SignalTypeSignProps) => {
  const {
    separateBoardForEachTextElement = false,
    placeElementsHorizontally = false
  } = options || {};

  const renderSign = () => {
    if (separateBoardForEachTextElement) {
      return textElements.map((textElement, idx) => (
        <Board key={idx} className={css.singleTextElementBoard}>
          {textElement}
        </Board>
      ));
    }

    return <Board>{...textElements}</Board>;
  };

  return (
    <div
      className={cx(
        css.container,
        { [css.horizontalPlacement]: placeElementsHorizontally },
        className
      )}
    >
      {renderSign()}
    </div>
  );
};
