import React from 'react';
import { RichTextContent } from 'contentful';

import { UIComponent } from '../../../types';
import { RichText } from '../../atoms/RichText';
import { Button, ButtonProps } from '../../atoms/Button';

import cx from 'classnames';

import css from './HomePage.module.scss';

export type HomePageProps = {
  hero: RichTextContent;
  button: ButtonProps;
} & UIComponent;

export const HomePage = ({ hero, button }: HomePageProps) => {
  const classNameList = {
    h1_className: cx(css.text, css.giganticText),
    h3_className: css.text,
    p_className: css.text
  };

  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <RichText content={hero} classNameList={classNameList} />
        <Button {...button} className="btn" />
      </div>
    </div>
  );
};
