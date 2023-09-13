import React from 'react';

import cx from 'classnames';

import { SquareTextSignProps } from '../../TextSign.types';

import css from '../../TextSign.module.scss';

export const SquareTextSign = ({
  text,
  exclamation = false,
  line = 'none',
  red = false
}: SquareTextSignProps) => {
  const upperLineClassNameList = cx({
    [css.noLine]: line === 'none',
    [css.horizontalLine]: line === 'horizontal',
    [css.verticalLine]: line === 'vertical',
    [css.diagonalLine]: line === 'diagonal'
  });

  const signTextClassNameList = cx(css.signText, {
    [css.red]: red,
    [css.signText_regular]: !exclamation,
    [css.signText_small]: exclamation
  });

  return (
    <div>
      {exclamation && <h2 className={css.exclamation}>!</h2>}
      <div className={upperLineClassNameList} />
      <h3 className={signTextClassNameList}>{text}</h3>
      {line === 'vertical' && <div className={css.verticalLineBottom}></div>}
    </div>
  );
};
