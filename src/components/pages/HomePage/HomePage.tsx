import React from 'react';

import { Document } from '@contentful/rich-text-types';
import cx from 'classnames';

import { UIComponent } from '../../../types';
import { Button, ButtonProps } from '../../atoms/Button';
import { RichText } from '../../atoms/RichText';

import css from './HomePage.module.scss';

export type HomePageProps = {
  hero: Document;
  heroButton?: ButtonProps;
} & UIComponent;

export const HomePage = ({ hero, heroButton }: HomePageProps) => {
  const classNameList = {
    h1_className: cx(css.text, 'pageTitle large'),
    h3_className: cx(css.text, 'sectionTitle'),
    p_className: css.text
  };

  return (
    <main className={css.container}>
      <div className={css.heroContainer}>
        <RichText content={hero} classNameList={classNameList} />
        {heroButton && <Button {...heroButton}>{heroButton.title}</Button>}
      </div>
    </main>
  );
};
