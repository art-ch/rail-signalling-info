import React from 'react';
import cx from 'classnames';

import css from './FilterPanel.module.scss';
import { Button } from '../../atoms/Button';
import { UIComponent } from '../../../types';

type FilterState = [
  string,
  React.Dispatch<React.SetStateAction<React.ReactNode>>
];

export type FilterPanelProps = {
  title?: string;
  filterState: FilterState;
  options: React.ReactNode[];
} & UIComponent;

export const FilterPanel = ({
  title,
  filterState,
  options,
  className
}: FilterPanelProps) => {
  const [state, setState] = filterState;

  return (
    <div className={cx(css.container, className)}>
      {title && <h3 className="sectionTitle">{title}</h3>}
      <div className={css.buttonContainer}>
        {options.map((option, idx) => (
          <Button
            key={idx}
            className={cx(css.filterButton, {
              [css.active]: option === state
            })}
            onClick={() => setState(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};
