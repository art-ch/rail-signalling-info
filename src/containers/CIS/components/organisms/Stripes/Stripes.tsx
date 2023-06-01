import React from 'react';

import { Stripe } from '../../molecules/Stripe';

import css from './Stripes.module.scss';

export type StripesProps = { aspect: string };

export const Stripes = ({ aspect }: StripesProps) => {
  const oneStripe = aspect.includes('stripe');
  const twoStripes = aspect.includes('two-stripes');

  const renderStripes = (amountOfStripes: 1 | 2) => (
    <div className={css.container}>
      {Array.from({ length: amountOfStripes }).map((_, idx) => (
        <Stripe key={idx} />
      ))}
    </div>
  );

  switch (true) {
    case twoStripes:
      return renderStripes(2);
    case oneStripe:
      return renderStripes(1);
    default:
      return null;
  }
};
