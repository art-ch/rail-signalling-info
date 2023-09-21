import React from 'react';

import { ImageSign } from 'src/components/molecules/Sign/components/ImageSign';
import { AnimateSign } from 'src/components/molecules/Sign/Sign.types';
import { useCISSignalContext } from 'src/containers/CIS/context';
import { getImageFromList } from 'src/utils/miscelaneousUtils';

export type HandProps = {
  left?: boolean;
} & AnimateSign;

export const Hand = ({ left, ...props }: HandProps) => {
  const {
    content: { imageSigns }
  } = useCISSignalContext();

  const leftHand = getImageFromList({
    imageList: imageSigns,
    imageTitle: 'Left Hand'
  });

  const rightHand = getImageFromList({
    imageList: imageSigns,
    imageTitle: 'Right Hand'
  });

  const handSign = (left && leftHand) || rightHand;

  return <ImageSign {...props} {...handSign} />;
};
