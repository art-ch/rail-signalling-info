import { Signal, Sign, Filters } from '../../../../types';
import { convertCamelCaseToTextCase } from '../../../../utils/miscelaneousUtils';
import { FilterPanelProps, FilterState } from '../../../molecules/FilterPanel';
import { ZonePageContentTypes } from '../ZonePageContentRenderer';

type getContentFilterOptionsProps = {
  signals: Signal[];
  signs: Sign[];
  locomotiveSignalization: Record<string, unknown>[];
};

type getMainFiltersProps = {
  filters: Filters[];
  states: FilterState[];
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

export const getMainFilterContent = ({
  filters,
  additionalClickHandler
}: getMainFiltersProps): Omit<FilterPanelProps, 'filterState'>[] =>
  filters.map((singleFilter) => {
    const title = singleFilter.title;
    const options = singleFilter.filters.map((filter) => filter.displayName);

    return { title, options, additionalClickHandler };
  });
