import cx from 'classnames';

import { FilterPanel } from '../../../molecules/FilterPanel';

import { useSignalContext } from '../../../../context/SignalContext';

import { getContentFilterOptions } from '../ZonePageFilters/ZonePageFilters.utils';

import { ZonePageContent } from '../ZonePage';

import css from './ZonePage.module.scss';
import { UIComponent } from '../../../../types';

export type FilterSectionProps = {
  content: any;
  isFilterSectionVisible: boolean;
  filterSectionClickHandlers: () => void;
} & UIComponent;

export const FilterSection = ({
  content,
  isFilterSectionVisible,
  filterSectionClickHandlers,
  className
}: ZonePageFilterSectionProps) => {
  return (
    <nav
      className={cx(
        {
          [css.contentFilters_shown]: isFilterSectionVisible
        },
        className
      )}
    >
      <FilterPanel
        options={contentFilterOptions}
        filterState={[shownContent, setShownContent]}
        additionalClickHandler={filterSectionClickHandlers}
      />
    </nav>
  );
};
