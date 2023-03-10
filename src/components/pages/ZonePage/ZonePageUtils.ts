import { Signal, Sign } from '../../../types';
import { convertCamelCaseToTextCase } from '../../../utils/miscelaneousUtils';
import { ZonePageContentTypes } from './ZonePageContentRenderer';

type getContentFilterOptionsProps = {
  signals: Signal[];
  signs: Sign[];
  locomotiveSignalization: Record<string, unknown>[];
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
