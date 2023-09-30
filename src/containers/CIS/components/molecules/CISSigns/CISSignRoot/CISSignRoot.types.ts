import {
  SignProps,
  ImageSignProps,
  AnimateSign
} from 'src/components/molecules/Sign/Sign.types';
import { PropsWithChild, PropsWithChildren } from 'src/types';

export type CISSignGrip = 'default' | 'black';
export type CISSignPole = 'permanent' | 'temporary';

export type CISImageSignProps = PropsWithChild<{ imageSign?: true }> &
  ImageSignProps;

export type CISSignProps = PropsWithChildren<
  {
    imageSign?: false;
    grip?: CISSignGrip;
    pole?: CISSignPole;
    poleGradientColor?: string;
  } & AnimateSign &
    Pick<
      SignProps,
      'type' | 'rotation' | 'atDistance' | 'className' | 'animatedSignClassName'
    >
>;

export type CISSignRootProps = CISSignProps | CISImageSignProps;
