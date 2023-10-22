import React from 'react';

import cx from 'classnames';
import Image from 'next/image';

import { useCISSignalContext } from 'src/containers/CIS/context';

import { getImageFromList } from 'src/utils/miscelaneousUtils';

import { CISSign } from '../../../CISSignRoot';

import { HandheldHornProps } from '../../HandHeldSign.types';

import css from './HandheldHorn.module.scss';

export const HandheldHorn = ({
  animate = false,
  ...props
}: HandheldHornProps) => {
  const {
    content: { imageSigns }
  } = useCISSignalContext();

  const handHorn = getImageFromList({
    imageList: imageSigns,
    imageTitle: 'CIS > Image Sign > Handheld Signs > Hand Horn > Horn'
  });

  const handHornSfx = getImageFromList({
    imageList: imageSigns,
    imageTitle:
      'CIS > Image Sign > Handheld Signs > Hand Horn > Horn Sound Effect'
  });

  let animatedSignClassName = '';

  if (animate && 'animatedSignPath' in props) {
    animatedSignClassName = cx(css[props.animatedSignPath]);
  }

  return (
    <CISSign imageSign className={css.handHornSoundContainer}>
      <div
        className={cx(
          css.handHornSfx,
          { [css.animatedSign]: animate },
          animatedSignClassName
        )}
      >
        <Image
          src={handHornSfx.src}
          alt={handHornSfx.alt}
          width={handHornSfx.width}
          height={handHornSfx.height}
          className={cx(
            css.handHornSfx,
            { [css.animatedSign]: animate },
            animatedSignClassName
          )}
        />
      </div>
      <div className={css.handHorn}>
        <Image
          src={handHorn.src}
          alt={handHorn.alt}
          width={handHorn.width}
          height={handHorn.height}
          className={css.handHorn}
        />
      </div>
    </CISSign>
  );
};
