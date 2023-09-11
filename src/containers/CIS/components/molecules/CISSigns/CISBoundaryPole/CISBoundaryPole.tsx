import React from 'react';

import cx from 'classnames';

import css from './CISBoundaryPole.module.scss';

export type CISBoundaryPoleProps = { branchPole?: boolean };

export const CISBoundaryPole = ({
  branchPole = false
}: CISBoundaryPoleProps) => {
  const mainSignClassName = branchPole ? css.whiteLine : css.blackLine;

  return (
    <div className={cx(css.pole, { [css.branchPole]: branchPole })}>
      <div className={mainSignClassName} />
    </div>
  );
};
