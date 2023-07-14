import React from 'react';

import { LightProps } from 'src/components/atoms/Light/Light.types';
import { Plate } from 'src/components/molecules/Plate';

import css from './Stripe.module.scss';

export const Stripe = () => {
  const AMOUNT_OF_LIGHTS = 3;
  const LIGHT_STUB: LightProps = {
    size: 'small',
    color: 'green'
  };

  const lights = Array.from({ length: AMOUNT_OF_LIGHTS }).map(
    (_) => LIGHT_STUB
  );

  return <Plate lights={lights} className={css.plate} />;
};
