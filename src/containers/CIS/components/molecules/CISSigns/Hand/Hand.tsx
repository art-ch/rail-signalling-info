import React from 'react';

import rightHand from '../../../../../../../public/images/hand-signs/right-hand.png';
import leftHand from '../../../../../../../public/images/hand-signs/left-hand.png';

import { ImageSign } from 'src/components/molecules/Sign/components/ImageSign';
import { AnimatedSignPath } from 'src/components/molecules/Sign/Sign.types';

export type HandProps = { left?: boolean; animatedSignPath?: AnimatedSignPath };

export const Hand = ({ left, animatedSignPath }: HandProps) => {
  return (
    <ImageSign
      src={(left && leftHand) || rightHand}
      alt={'hand sign'}
      animatedSignPath={animatedSignPath}
    />
  );
};
