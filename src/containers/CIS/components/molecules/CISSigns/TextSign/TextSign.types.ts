import { SignType } from 'src/components/molecules/Sign/Sign.types';
import { CISSignPole } from '../CISSignRoot/CISSignRoot.types';

export type SquareTextSignProps = {
  textSignType?: 'square';
  text?: string;
  exclamation?: boolean;
  line?: 'none' | 'vertical' | 'horizontal' | 'diagonal';
  red?: boolean;
};

export type RectangularTextSignProps = {
  textSignType?: 'rectangular';
  type?: SignType;
  text?: string;
};

export type TextSignVariableProps =
  | SquareTextSignProps
  | RectangularTextSignProps;

export type TextSignProps = TextSignVariableProps & {
  type?: SignType;
  pole?: CISSignPole;
  red?: boolean;
};
