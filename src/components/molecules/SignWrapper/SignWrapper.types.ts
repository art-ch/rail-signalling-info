import { PropsWithChildren, UIComponent } from 'src/types';

export type SignWrapperContainerWidth =
  | 'narrow'
  | 'mediumNarrow'
  | 'defaultWidth'
  | 'mediumWide'
  | 'wide';

export type AnimatedSignWrapperContainerAdditionalMargin =
  | 'mediumLarge'
  | 'large'
  | 'largeMedium'
  | 'largeNoMargin'
  | 'noMarginLarge'
  | 'extraLargeMedium';

export type SignWrapperForAnimatedSigns =
  | { withAnimatedSigns?: false }
  | {
      withAnimatedSigns?: true;
      additionalMargin: AnimatedSignWrapperContainerAdditionalMargin;
    };

export type SignWrapperProps = PropsWithChildren<
  {
    containerWidth?: SignWrapperContainerWidth;
    animatedWrapperProps?: SignWrapperForAnimatedSigns;
  } & UIComponent
>;
