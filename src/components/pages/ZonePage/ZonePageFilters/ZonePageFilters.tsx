import {
  FilterList,
  FilterSection
} from 'src/components/organisms/FilterSection';
import { FilterPanelProps } from 'src/components/molecules/FilterPanel';

import { useSignalContext } from 'src/context/SignalContext';

import { getContentFilterOptions } from './ZonePageFilters.utils';

import { UIComponent } from 'src/types';

export type ZonePageFiltersProps = {
  isFilterSectionVisible: boolean;
  filterSectionClickHandlers: () => void;
} & UIComponent;

export const ZonePageFilters = ({
  isFilterSectionVisible,
  filterSectionClickHandlers,
  className
}: ZonePageFiltersProps) => {
  const { content, shownContent, setShownContent } = useSignalContext();

  const { signals, signs, locomotiveSignalization } = content;

  const contentFilterOptions = getContentFilterOptions({
    signals,
    locomotiveSignalization,
    signs
  });

  const contentFilter: FilterPanelProps = {
    title: 'Content Filters',
    options: contentFilterOptions,
    filterState: [shownContent, setShownContent]
  };

  const filters: FilterList = [contentFilter];

  return (
    <FilterSection
      filters={filters}
      isFilterSectionVisible={isFilterSectionVisible}
      filterSectionClickHandlers={filterSectionClickHandlers}
      className={className}
    />
  );
};
