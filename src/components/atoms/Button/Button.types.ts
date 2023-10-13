import { PropsWithOptionalChild, UIComponent } from 'src/types';

export type ButtonSize = 'default' | 'mediumSmall' | 'small';

export type ButtonProps = PropsWithOptionalChild<{
  title?: string;
  link?: string;
  size?: ButtonSize;
  onClick?: (event?: React.MouseEvent, props?: unknown) => void;
}> &
  UIComponent;
