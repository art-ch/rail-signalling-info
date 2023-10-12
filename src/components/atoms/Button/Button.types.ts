import { UIComponent } from 'src/types';

export type ButtonSize = 'default' | 'mediumSmall' | 'small';

export type ButtonProps = {
  title?: string;
  link?: string;
  size?: ButtonSize;
  onClick?: (event?: React.MouseEvent, props?: unknown) => void;
  children: React.ReactNode;
} & UIComponent;
