import {
  ImageSignProps,
  SignProps
} from 'src/components/molecules/Sign/Sign.types';
import { PropsWithChildren } from 'src/types';

export type CISSignGrip = 'default' | 'black';
export type CISSignPole = 'permanent' | 'temporary';

export type CISSignProps = PropsWithChildren<
  {
    imageSign?: false;
    grip?: CISSignGrip;
    pole?: CISSignPole;
    poleGradientColor?: string;
  } & Pick<SignProps, 'type' | 'rotation' | 'animatedSignPath' | 'atDistance'>
>;

export type CISSignDiscriminantProps =
  | CISSignProps
  | ({ imageSign?: true } & ImageSignProps);
