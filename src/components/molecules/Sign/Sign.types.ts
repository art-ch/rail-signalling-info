import { ImageProps } from 'next/image';
import { UIComponent } from 'src/types';

export type SignType =
  | 'standalone'
  | 'dwarfStandalone'
  | 'handheld'
  | 'onCatenaryPole'
  | 'onCatenaryWire';

export type SignRotation = 'default' | 'deg315' | 'deg90';
export type AnimatedSignPath =
  | 'stop'
  | 'driveForward'
  | 'driveBackward'
  | 'slowDown'
  | 'startBreaking'
  | 'endBreaking'
  | 'damagedCatenary';

export type ImageSignProps = {
  animatedSignPath?: AnimatedSignPath;
} & ImageProps &
  UIComponent<{ imageClassName?: string }>;

export type SignProps = {
  children: React.ReactNode | React.ReactNode[];
  type?: SignType;
  rotation?: SignRotation;
  animatedSignPath?: AnimatedSignPath;

  // meaning sign is placed futher from user's point of view
  atDistance?: boolean;
} & UIComponent;
