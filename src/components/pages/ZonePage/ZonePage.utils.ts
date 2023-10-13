import { convertCamelCaseToTextCase } from '../../../utils/miscelaneousUtils';
import { FilterPanelProps } from '../../molecules/FilterPanel';

import {
  GetContentFilterOptionsProps,
  GetMainFiltersProps,
  OnContentSearchProps
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

export const isValidContentSearchInput = (input: string) =>
  /^[a-zA-Z, ]{1,140}$/g.test(input);

export const onPasteIntoContentSearchField = (
  event: React.ClipboardEvent<HTMLInputElement>
) => {
  let input = event.clipboardData.getData('Text');

  if (!isValidContentSearchInput(input)) {
    event.preventDefault();
  }
};

export const onSearchContentFieldKeyDown = (
  event: React.KeyboardEvent<HTMLInputElement>
) => {
  let input = event.key;

  if (!isValidContentSearchInput(input)) {
    event.preventDefault();
  }
};

export const onContentSearch = ({
  event,
  setShownContent
}: OnContentSearchProps) => {
  let input = event.target.value;

  if (isValidContentSearchInput(input)) {
    setShownContent(input);
  }
};
