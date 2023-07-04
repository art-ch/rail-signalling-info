import { UIComponent } from 'src/types';

export type BoardBorders = 'edge' | 'edgeThickStaggered';

export type BoardProps = {
  children?: React.ReactNode | React.ReactNode[];
  border?: BoardBorders;
} & UIComponent<{ innerFrameClassName?: string }>;
