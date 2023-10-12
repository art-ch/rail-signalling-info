import {
  FilterList,
  FilterSection
} from 'src/components/organisms/FilterSection';

import { ZonePageFiltersProps } from 'src/components/pages/ZonePage/ZonePage.types';
import { useCISSignalContext } from '../../../context/CISSignalContext';
import { getMainFilters } from 'src/components/pages/ZonePage/ZonePage.utils';
import { SignalizationFilterListModel } from 'src/types';

export const CISZonePageFilters = ({
  shownContentType,
  contentFilter,
  isFilterSectionVisible,
  filterSectionClickHandlers,
  className
}: ZonePageFiltersProps) => {
  const { content, stateWithHandlers } = useCISSignalContext();

  const { signalFilters, signFilters, locomotiveSignalizationFilters } =
    content;

  const {
    allSignalsState,
    trainProtectionZoneState,
    signalTypeState,
    signTypeState,
    locomotiveSignalizationState
  } = stateWithHandlers;

  const signalFilterList: FilterList = getMainFilters({
    filters: signalFilters,
    state: [allSignalsState, trainProtectionZoneState, signalTypeState]
  });
  const signFilterList: FilterList = getMainFilters({
    filters: signFilters,
    state: [signTypeState]
  });
  const locomotiveSignalizationList: FilterList = getMainFilters({
    filters: locomotiveSignalizationFilters as SignalizationFilterListModel[],
    state: [locomotiveSignalizationState]
  });

  let filters: FilterList = [];

  switch (shownContentType) {
    case 'Signals':
      filters = [contentFilter, ...signalFilterList];
      break;
    case 'Signs':
      filters = [contentFilter, ...signFilterList];
      break;
    case 'Locomotive Signalization':
      filters = [contentFilter, ...locomotiveSignalizationList];
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
