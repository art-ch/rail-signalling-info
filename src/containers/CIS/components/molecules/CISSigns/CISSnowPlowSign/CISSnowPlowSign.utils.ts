import {
  CISSnowPlowSignType,
  GetCISSnowPlowSignImageProps
} from './CISSnowPlowSign.types';

import { capitalize, getImageFromList } from 'src/utils/miscelaneousUtils';

export const getCISSnowPlowSignName = (type: CISSnowPlowSignType) => {
  let signName = '';

  switch (type) {
    case 'approach':
    case 'approachAtHighSpeed':
      signName = 'Approach';
      break;
    default:
      signName = capitalize(type);
      break;
  }

  return `Snow Plow > ${signName}`;
};

export const getCISSnowPlowSignImage = ({
  imageList,
  imageName
}: GetCISSnowPlowSignImageProps) =>
  getImageFromList({
    imageList: imageList,
    imageTitle: imageName
  });
