import { EntrySkeletonType } from 'contentful';

import { ZONE_PAGE_CONTENT_STUB, client } from 'src/api/cms';
import { ZonePageContent } from 'src/components/pages/ZonePage/ZonePage.types';
import {
  Entry,
  UnresolvedAsset,
  UnresolvedEntry,
  ZonePageContentModel
} from 'src/types';

import { filterOutUndefinedValues } from './miscelaneousUtils';

export const getImage = (entry: UnresolvedAsset) => {
  if ('fields' in entry) {
    return entry?.fields.file?.url;
  }
};

export const getImageWithDetails = (entry: UnresolvedAsset) => {
  if ('fields' in entry) {
    return entry?.fields;
  }
};

export const getContent = <T extends EntrySkeletonType>(
  entry: UnresolvedEntry<T>
) => {
  if ('fields' in entry) {
    return entry.fields;
  }
};

export const fetchReferences = async <T extends EntrySkeletonType>(
  referenceList?: UnresolvedEntry<T>[]
) => {
  if (!referenceList || referenceList.length === 0) {
    return [];
  }

  const data = (await Promise.all(
    referenceList.map(
      async (reference) => await client.getEntry(reference.sys.id)
    )
  )) as Entry<T>[];

  const fetchedReferences = data.map((reference) => getContent(reference));

  return filterOutUndefinedValues(fetchedReferences);
};

export const getZonePageContent = (
  content: UnresolvedEntry<ZonePageContentModel>
): ZonePageContent => {
  const filteredContent = getContent(content);

  const imageSignList = filteredContent?.imageSigns.map((imageSignAsset) =>
    getImageWithDetails(imageSignAsset)
  );

  const imageSigns = filterOutUndefinedValues(imageSignList);

  const zonePageContent = filteredContent || ZONE_PAGE_CONTENT_STUB;

  return { ...zonePageContent, imageSigns };
};
