import api from '../api';

import { Asset, Entry } from 'contentful';

import { ZonePageContentModel } from 'src/types';
import { ZonePageContent } from 'src/components/pages/ZonePage/ZonePage.types';

export const getImage = (entry: Asset) => entry.fields.file.url;

export const getImageWithDetails = (entry: Asset) => entry.fields;

export const getContent = <T>(entry: Entry<T>) => entry.fields;

export const fetchReferences = async <T>(referenceList: Entry<T>[]) => {
  const data = (await Promise.all(
    referenceList.map(
      async (reference) => await api.cms.getEntry(reference.sys.id)
    )
  )) as Entry<T>[];

  return data.map((reference) => getContent(reference));
};

export const getZonePageContent = (
  content: ZonePageContentModel
): ZonePageContent => {
  const filteredContent = getContent(content);

  const imageSigns = filteredContent.imageSigns.map((sign) =>
    getImageWithDetails(sign)
  );

  return { ...filteredContent, imageSigns } as ZonePageContent;
};
