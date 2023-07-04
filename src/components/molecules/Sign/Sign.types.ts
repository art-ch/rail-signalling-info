import { UIComponent } from 'src/types';

export type SignType = 'standalone' | 'handheld' | 'onCatenaryPole';
export type SignRotation = 'default' | 'deg315' | 'deg90';

export type SignProps = {
  children: React.ReactNode | React.ReactNode[];
  type?: SignType;
  rotation?: SignRotation;
  imageSign?: boolean;
} & UIComponent;
