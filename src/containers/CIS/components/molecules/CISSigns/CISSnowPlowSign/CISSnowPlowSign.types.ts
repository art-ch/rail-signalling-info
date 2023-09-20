import { ImageModel } from 'src/types';

export type CISSnowPlowSignType =
  | 'approach'
  | 'approachAtHighSpeed'
  | 'raise'
  | 'drop';

export type CISSnowPlowSignProps = { snowPlowSignType: CISSnowPlowSignType };

export type GetCISSnowPlowSignImageProps = {
  imageList: ImageModel[];
  imageName: string;
};
