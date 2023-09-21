import cx from 'classnames';

import { AnimateSign } from './Sign.types';

export const getAnimatedSignClassName = (props: AnimateSign) => {
  let animatedSignClassName = '';

  if (props.animate) {
    const { animate, animatedSignPath } = props;

    animatedSignClassName = cx(
      { ['animateSign']: animate && animatedSignPath },
      animatedSignPath
    );
  }

  return animatedSignClassName;
};
