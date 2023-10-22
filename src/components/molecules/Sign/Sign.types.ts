import { PropsWithChildren, UIComponent } from 'src/types';

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
  | 'stopBreaking'
  | 'damagedCatenary';

export type AnimateSign<CustomAnimatedSignPath = AnimatedSignPath> =
  | {
      animate?: true;
      animatedSignPath: CustomAnimatedSignPath;
    }
  | { animate?: false };

export type ImageSignProps = {
  children: React.ReactElement | React.ReactElement[];
} & AnimateSign &
  UIComponent<{ animatedSignClassName?: string; imageClassName?: string }>;

export type SignProps = PropsWithChildren<{
  type?: SignType;
  rotation?: SignRotation;
  /**
   * Sign is placed futher from user's point of view
   */
  atDistance?: boolean;
}> &
  AnimateSign &
  UIComponent<{ animatedSignClassName?: string }>;

export type GetAnimatedSignClassNameProps = {
  props: AnimateSign;
  /**
   * CSS module containing specific zone sign styling
   */
  css: { readonly [key: string]: string };
};
