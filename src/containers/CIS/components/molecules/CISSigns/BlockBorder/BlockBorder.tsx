import React from 'react';

import { BlockBorderProps } from './BlockBorder.types';
import { ALTPBlockBorder } from './components/ALTPBlockBorder';
import { WWLTPBlockBorder } from './components/WWLTPBlockBorder';

export const BlockBorder = ({ type }: BlockBorderProps) => {
  switch (type) {
    case 'altp':
      return <ALTPBlockBorder />;
    case 'wwltp':
      return <WWLTPBlockBorder />;
    default:
      throw new Error('Please pass type of block border sign');
  }
};
