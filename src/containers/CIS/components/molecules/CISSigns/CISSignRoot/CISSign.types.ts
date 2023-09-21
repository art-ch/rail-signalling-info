import {
  AnimateSign,
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
  } & AnimateSign &
    Pick<SignProps, 'type' | 'rotation' | 'atDistance' | 'className'>
>;
