import React from 'react';

import css from './Description.module.scss';

export type DescriptionProps = {
  title: string;
  mainText: string;
};

export const Description = ({ title, mainText }) => (
  <div>
    <h3 className={css.title}>{title}</h3>
    <p className={css.mainText}>{mainText}</p>
  </div>
);
