import { Asset, Entry } from 'contentful';

export const getImage = (entry: Asset) => entry.fields.file.url;

export const getContent = <T>(entry: Entry<T>) => entry.fields;
