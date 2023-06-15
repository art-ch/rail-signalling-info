import React from 'react';

import { OutOfServicePlanks } from 'src/components/molecules/OutOfServicePlanks';
import { Stripes, StripesProps } from '../Stripes';
import {
  ConditionalSignalBoard,
  ConditionalSignalBoardProps
} from '../../atoms/ConditionalSignalBoard';
import {
  CISSignalTypeSign,
  CISSignalTypeSignProps
} from 'src/containers/CIS/components/molecules/CISSignalTypeSign';
import {
  ShortBlockSign,
  ShortBlockSignProps
} from 'src/containers/CIS/components/molecules/ShortBlockSign';
import {
  SpecialBlockSignalBoard,
  SpecialBlockSignalBoardProps
} from '../../atoms/SpecialBlockSignalBoard';

import css from './CISSignalSignRenderer.module.scss';

export type CISSignalSignRendererProps = {
  stripes?: StripesProps;
  conditionalSignalBoard?: ConditionalSignalBoardProps;
  shortBlockSign?: ShortBlockSignProps;
  signalTypeSign?: CISSignalTypeSignProps;
  specialBlockSignalBoard?: SpecialBlockSignalBoardProps;
  outOfServicePlanks?: boolean;
};

export const CISSignalSignRenderer = (props: CISSignalSignRendererProps) => {
  if (Object.keys(props).length === 0) return null;

  const {
    stripes,
    conditionalSignalBoard,
    shortBlockSign,
    signalTypeSign,
    specialBlockSignalBoard,
    outOfServicePlanks
  } = props;

  return (
    <div className={css.container}>
      {stripes && <Stripes {...(stripes as StripesProps)} />}
      {conditionalSignalBoard && (
        <ConditionalSignalBoard
          {...(conditionalSignalBoard as ConditionalSignalBoardProps)}
        />
      )}
      {specialBlockSignalBoard && (
        <SpecialBlockSignalBoard
          {...(specialBlockSignalBoard as SpecialBlockSignalBoardProps)}
        />
      )}
      {shortBlockSign && (
        <ShortBlockSign {...(shortBlockSign as ShortBlockSignProps)} />
      )}
      {signalTypeSign && (
        <CISSignalTypeSign {...(signalTypeSign as CISSignalTypeSignProps)} />
      )}
      {outOfServicePlanks && <OutOfServicePlanks />}
    </div>
  );
};
