import React from 'react';
import cx from 'classnames';

import css from './FilterPanel.module.scss';
import { Button } from '../../atoms/Button';
import { UIComponent } from '../../../types';

export type FilterPanelProps = {
  title?: string;
  state: any;
  options: React.ReactNode[];
} & UIComponent;

export const FilterPanel = ({
  title,
  state,
  options,
  className
}: FilterPanelProps) => {
  const { shownContent, setShownContent } = state;

  return (
    <div className={cx(css.container, className)}>
      {title && <h3 className="sectionTitle">{title}</h3>}
      <div className={css.buttonContainer}>
        {options.map((option) => (
          <Button
            className={cx(css.filterButton, {
              [css.active]: option === shownContent
            })}
            onClick={() => setShownContent(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};
