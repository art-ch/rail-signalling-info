import {
  FilterList,
  FilterSection
} from 'src/components/organisms/FilterSection';

import { ZonePageFiltersProps } from 'src/components/pages/ZonePage';
import { useCISSignalContext } from '../../../context/CISSignalContext';
import { getMainFilters } from 'src/components/pages/ZonePage/ZonePage.utils';

export const CISZonePageFilters = ({
  shownContent,
  contentFilter,
  isFilterSectionVisible,
  filterSectionClickHandlers,
  className
}: ZonePageFiltersProps) => {
  const { content, state } = useCISSignalContext();

  const { signalFilters, signFilters } = content;
  const { allSignalsState, trainProtectionZoneState, signalState, signState } =
    state;

  const signalFilterList: FilterList = getMainFilters({
    filters: signalFilters,
    state: [allSignalsState, trainProtectionZoneState, signalState]
  });
  const signFilterList: FilterList = getMainFilters({
    filters: signFilters,
    state: [signState]
  });

  let filters: FilterList = [];

  switch (shownContent) {
    case 'Signals':
      filters = [contentFilter, ...signalFilterList];
      break;
    case 'Signs':
      filters = [contentFilter, ...signFilterList];
      break;
    default:
      filters = [contentFilter];
      break;
  }

  return (
    <FilterSection
      filters={filters}
      isFilterSectionVisible={isFilterSectionVisible}
      filterSectionClickHandlers={filterSectionClickHandlers}
      className={className}
    />
  );
};
