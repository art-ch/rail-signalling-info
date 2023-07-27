import React from 'react';

import { ImageSign } from 'src/components/molecules/Sign/components/ImageSign';
import { AnimatedSignPath } from 'src/components/molecules/Sign/Sign.types';
import { useCISSignalContext } from 'src/containers/CIS/context';
import { getImageFromList } from 'src/utils/miscelaneousUtils';

export type HandProps = { left?: boolean; animatedSignPath?: AnimatedSignPath };

export const Hand = ({ left, animatedSignPath }: HandProps) => {
  const {
    content: { imageSigns }
  } = useCISSignalContext();

  const leftHand = getImageFromList({
    imageList: imageSigns,
    imageTitle: 'Left Hand',
    customDimensions: { width: 120, height: 120 }
  });

  const rightHand = getImageFromList({
    imageList: imageSigns,
    imageTitle: 'Right Hand',
    customDimensions: { width: 130, height: 130 }
  });

  const handSign = (left && leftHand) || rightHand;

  return <ImageSign animatedSignPath={animatedSignPath} {...handSign} />;
};
