import { Filters } from '../../../types';
import { convertCamelCaseToTextCase } from '../../../utils/miscelaneousUtils';
import { FilterPanelProps, FilterState } from '../../molecules/FilterPanel';
import { ZonePageContentTypes } from 'src/components/pages/ZonePage';
import { ZonePageContent } from 'src/components/pages/ZonePage';

type getContentFilterOptionsProps = Omit<
  ZonePageContent,
  'signalTypeSigns' | `${string}Filters`
>;

type getMainFiltersProps = {
  filters: Filters[];
  state: FilterState[];
  additionalClickHandler?: () => void;
};

export const getContentFilterOptions = (
  content: getContentFilterOptionsProps
): ZonePageContentTypes[] => {
  const filteredContent = Object.entries(content).filter(
    ([_, contentItemValue]) => contentItemValue.length > 0
  );

  const contentFilterOptions = filteredContent.map(([contentItemKey]) =>
    convertCamelCaseToTextCase(contentItemKey)
  );

  return contentFilterOptions as ZonePageContentTypes[];
};

export const getMainFilters = ({
  filters,
  state,
  additionalClickHandler
}: getMainFiltersProps): FilterPanelProps[] =>
  filters.map((singleFilter, idx) => {
    const title = singleFilter.title;
    const options = singleFilter.filters.map((filter) => filter.displayName);
    const filterState = state[idx];

    return { title, options, filterState, additionalClickHandler };
  });
