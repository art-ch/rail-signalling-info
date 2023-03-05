import api from '../api';

import { Asset, Entry } from 'contentful';

export const getImage = (entry: Asset) => entry.fields.file.url;

export const getContent = <T>(entry: Entry<T>) => entry.fields;

export const fetchReferences = async <T>(referenceList: Entry<T>[]) => {
  const data = (await Promise.all(
    referenceList.map(
      async (reference) => await api.cms.getEntry(reference.sys.id)
    )
  )) as Entry<T>[];

  return data.map((reference) => getContent(reference));
};
