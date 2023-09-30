import cx from 'classnames';

import { GetAnimatedSignClassNameProps } from './Sign.types';

export const getAnimatedSignClassName = ({
  props,
  css
}: GetAnimatedSignClassNameProps) => {
  let animatedSignClassName = '';

  if (props.animate) {
    const { animate, animatedSignPath } = props;

    animatedSignClassName = cx(
      {
        [css.animatedSign]: animate && animatedSignPath
      },
      css[animatedSignPath]
    );
  }

  return animatedSignClassName;
};
