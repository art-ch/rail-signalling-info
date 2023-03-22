import { FilterList, FilterSection } from '../../../organisms/FilterSection';

import { getContentFilterOptions } from './ZonePageFilters.utils';

import { UIComponent } from '../../../../types';
import { FilterPanelProps } from '../../../molecules/FilterPanel';
import { useSignalContext } from '../../../../context/SignalContext';

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
