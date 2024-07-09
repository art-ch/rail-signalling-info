import cx from 'classnames';
import { IoMdClose } from 'react-icons/io';

import { Button } from 'src/components/atoms/Button';

import { UIComponent } from '../../../types';

import { FilterPanel, FilterPanelProps } from '../../molecules/FilterPanel';

import css from './FilterSection.module.scss';

export type FilterList = FilterPanelProps[];

export type FilterSectionProps = {
  filters: FilterList;
  isFilterSectionVisible: boolean;
  filterSectionClickHandlers?: () => void;
  closeFilterSectionHandler: () => void;
} & UIComponent;

export const FilterSection = ({
  filters,
  isFilterSectionVisible,
  filterSectionClickHandlers,
  closeFilterSectionHandler,
  className
}: FilterSectionProps) => {
  const filterPanelClickHandler = (additionalClickHandler?: () => void) => {
    additionalClickHandler?.();
    filterSectionClickHandlers?.();
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
      {isFilterSectionVisible && (
        <IoMdClose
          className={css.closeFilterSectionIcon}
          onClick={closeFilterSectionHandler}
        />
      )}
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
      {isFilterSectionVisible && (
        <div className={css.closeFilterSectionButtonWrapper}>
          <Button
            className={css.closeFilterSectionButton}
            onClick={closeFilterSectionHandler}
          >
            Done
          </Button>
        </div>
      )}
    </nav>
  );
};
