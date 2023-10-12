import { convertCamelCaseToTextCase } from '../../../utils/miscelaneousUtils';
import { FilterPanelProps } from '../../molecules/FilterPanel';

import {
  GetContentFilterOptionsProps,
  GetMainFiltersProps
} from './ZonePage.types';

import { ZonePageContentType } from './ZonePage.types';

export const getContentFilterOptions = (
  content: GetContentFilterOptionsProps
): ZonePageContentType[] => {
  const filteredContent = Object.entries(content).filter(
    ([_, contentItemValue]) => contentItemValue.length > 0
  );

  const contentFilterOptions = filteredContent.map(([contentItemKey]) =>
    convertCamelCaseToTextCase(contentItemKey)
  );

  return contentFilterOptions as ZonePageContentType[];
};

export const getMainFilters = ({
  filters,
  state,
  additionalClickHandler
}: GetMainFiltersProps): FilterPanelProps[] =>
  filters.map((singleFilter, idx) => {
    const title = singleFilter.title;
    const options = singleFilter.filters.map((filter) => filter.displayName);
    const filterState = state[idx];

    return { title, options, filterState, additionalClickHandler };
  });
