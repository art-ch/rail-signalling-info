import {
  ImageSignProps,
  SignProps
} from 'src/components/molecules/Sign/Sign.types';

export type CISSignGripColor = 'default' | 'black';

export type CISSignProps = {
  imageSign?: false;
  children: React.ReactNode | React.ReactNode[];
  gripColor?: CISSignGripColor;
} & Pick<SignProps, 'type' | 'rotation' | 'animatedSignPath'>;

export type CISSignDiscriminantProps =
  | CISSignProps
  | ({ imageSign?: true } & ImageSignProps);
