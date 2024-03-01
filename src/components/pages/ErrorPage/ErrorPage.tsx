import React from 'react';

import cx from 'classnames';
import { RichTextContent } from 'contentful';

import { Board } from 'src/components/atoms/Board';
import { Button, ButtonProps } from 'src/components/atoms/Button';
import { RichText } from 'src/components/atoms/RichText';
import { UIComponent } from 'src/types';

import css from './ErrorPage.module.scss';

export type ErrorPageProps = {
  code: string;
  hero: RichTextContent;
  heroButton: ButtonProps;
} & UIComponent;

export const ErrorPage = ({ code, hero, heroButton }: ErrorPageProps) => {
  const classNameList = {
    h3_className: cx(css.text, 'sectionTitle'),
    p_className: css.text
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.buffer}>
          <div className={css.buffer__verticalPole} />
          <div className={css.buffer__horizontalPole} />
          <Board
            border="edgeThickStaggered"
            className={css.board}
            innerFrameClassName={css.board__innerFrame}
          >
            <h1 className={css.text}>{code}</h1>
          </Board>
          <div className={css.buffer__verticalPole} />
        </div>
        <div className={css.heroContainer}>
          <RichText content={hero} classNameList={classNameList} />
          <Button {...heroButton}>{heroButton.title}</Button>
        </div>
      </div>
    </div>
  );
};
