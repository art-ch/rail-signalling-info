import cx from 'classnames';

import { UIComponent } from '../../../types';

import { FilterPanel, FilterPanelProps } from '../../molecules/FilterPanel';

import css from './FilterSection.module.scss';

export type FilterList = FilterPanelProps[];

export type FilterSectionProps = {
  filters: FilterList;
  isFilterSectionVisible: boolean;
  filterSectionClickHandlers: () => void;
} & UIComponent;

export const FilterSection = ({
  filters,
  isFilterSectionVisible,
  filterSectionClickHandlers,
  className
}: FilterSectionProps) => {
  const filterPanelClickHandler = (additionalClickHandler?: () => void) => {
    additionalClickHandler?.();
    filterSectionClickHandlers();
  };

  return (
    <nav
      className={cx(
        css.filterSection,
        {
          [css.filterSection_shown]: isFilterSectionVisible
        },
        className
      )}
    >
      {filters.map(
        ({ title, options, filterState, additionalClickHandler }, idx) => (
          <FilterPanel
            key={idx}
            title={title}
            options={options}
            filterState={filterState}
            additionalClickHandler={() =>
              filterPanelClickHandler(additionalClickHandler)
            }
          />
        )
      )}
    </nav>
  );
};
