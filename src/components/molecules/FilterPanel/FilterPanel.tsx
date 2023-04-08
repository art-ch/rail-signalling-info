import React from 'react';
import cx from 'classnames';

import css from './FilterPanel.module.scss';
import { Button } from '../../atoms/Button';
import { SetState, UIComponent } from '../../../types';

export type FilterState = [
  state: React.ReactNode,
  setState: SetState<React.ReactNode> | ((option: React.ReactNode) => void)
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

  const renderButtons = () =>
    options.map((option, idx) => {
      const activeOption = option === state;

      return (
        <Button
          key={idx}
          className={cx(css.filterButton, {
            [css.active]: activeOption
          })}
          onClick={() => {
            setState(option);
            additionalClickHandler?.();
          }}
        >
          {option}
        </Button>
      );
    });

  return (
    <div className={cx(css.container, className)}>
      {title && <h3 className="sectionTitle">{title}</h3>}
      <div className={css.buttonContainer}>{renderButtons()}</div>
    </div>
  );
};
