import React from 'react';
import cx from 'classnames';

import css from './FilterPanel.module.scss';
import { Button } from '../../atoms/Button';
import { UIComponent } from '../../../types';

export type FilterState = [
  state: string,
  setState: React.Dispatch<React.SetStateAction<React.ReactNode>>
];

export type FilterPanelProps = {
  title?: string;
  options: React.ReactNode[];
  filterState: FilterState;
  additionalClickHandler?: () => void;
} & UIComponent;

export const FilterPanel = ({
  title,
  filterState,
  options,
  additionalClickHandler,
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
            onClick={() => {
              setState(option);
              additionalClickHandler?.();
            }}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};
