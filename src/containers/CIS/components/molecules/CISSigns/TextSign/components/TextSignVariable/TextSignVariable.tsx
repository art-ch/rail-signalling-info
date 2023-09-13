import React from 'react';

import { RectangularTextSign } from '../../components/RectangularTextSign';
import { SquareTextSign } from '../../components/SquareTextSign';

import {
  RectangularTextSignProps,
  SquareTextSignProps,
  TextSignVariableProps
} from '../../TextSign.types';

export const TextSignVariable = ({
  textSignType,
  ...props
}: TextSignVariableProps) => {
  switch (textSignType) {
    case 'rectangular':
      return <RectangularTextSign {...(props as RectangularTextSignProps)} />;
    case 'square':
      return <SquareTextSign {...(props as SquareTextSignProps)} />;
    default:
      throw new Error('Please pass type of text sign');
  }
};
