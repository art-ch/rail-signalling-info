import React from 'react';

import cx from 'classnames';

import { FaSkullCrossbones } from 'react-icons/fa';

import { Board } from 'src/components/atoms/Board';

import { CISSign } from '../CISSignRoot';

import css from './BioHazardSign.module.scss';
import commonCISSignCSS from '../CISSignRoot/CISSign.module.scss';

export type BioHazardSignProps = {
  pointOfView: 'front' | 'sideways' | 'fromBehind';
};

export const BioHazardSign = ({ pointOfView }: BioHazardSignProps) => {
  const frontPOV = pointOfView === 'front';
  const sidewaysPOV = pointOfView === 'sideways';
  const fromBehindPOV = pointOfView === 'fromBehind';

  const sidewaysClassName = { [css.sideways]: sidewaysPOV };
  const fromBehindClassName = { [css.fromBehind]: fromBehindPOV };

  return (
    <CISSign pole="temporary" poleGradientColor="black">
      <div className={css.capContainer}>
        <div className={cx(css.cap)} />
        <div className={cx(css.cap, css.cap_small)} />
      </div>
      <Board
        border="edgeThickStaggered"
        className={cx(
          css.frame,
          commonCISSignCSS.frame,
          css.outerFrame,
          sidewaysClassName
        )}
        innerFrameClassName={cx(
          css.frame,
          commonCISSignCSS.frame,
          css.innerFrame,
          sidewaysClassName
        )}
      >
        <div
          className={cx(
            css.frame,
            commonCISSignCSS.frame,
            css.innermostFrame,
            sidewaysClassName
          )}
        >
          {!sidewaysPOV && (
            <div className={css.content}>
              <div className={cx(css.text, fromBehindClassName)}>
                {fromBehindPOV && <span>Тут</span>} Забруднено
              </div>
              {frontPOV && <FaSkullCrossbones />}
            </div>
          )}
        </div>
      </Board>
    </CISSign>
  );
};
