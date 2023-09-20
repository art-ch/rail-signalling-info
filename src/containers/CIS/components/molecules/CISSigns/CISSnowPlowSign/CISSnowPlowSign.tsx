import Image from 'next/image';
import React from 'react';

import { useCISSignalContext } from 'src/containers/CIS/context';

import { CISSign } from '../CISSignRoot';

import { CISSnowPlowSignProps } from './CISSnowPlowSign.types';

import {
  getCISSnowPlowSignImage,
  getCISSnowPlowSignName
} from './CISSnowPlowSign.utils';

import css from './CISSnowPlowSign.module.scss';

export const CISSnowPlowSign = ({ snowPlowSignType }: CISSnowPlowSignProps) => {
  const {
    content: { imageSigns }
  } = useCISSignalContext();

  const snowPlowSignImage = getCISSnowPlowSignImage({
    imageList: imageSigns,
    imageName: getCISSnowPlowSignName(snowPlowSignType)
  });

  const isDoubled = snowPlowSignType === 'approachAtHighSpeed';

  const FRAME_AMOUNT = isDoubled ? 2 : 1;

  return (
    <CISSign className={css.sign}>
      {Array.from({ length: FRAME_AMOUNT }).map((_, id) => (
        <Image
          key={id}
          className={css.frame}
          src={snowPlowSignImage.src}
          alt={snowPlowSignImage.alt}
          width={snowPlowSignImage.width}
          height={snowPlowSignImage.height}
        />
      ))}
    </CISSign>
  );
};
