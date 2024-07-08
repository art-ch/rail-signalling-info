import { AssetFields, EntryFieldTypes } from 'contentful';

export type ImageModel = AssetFields;

export type ButtonModel = {
  contentTypeId: 'button';
  fields: { title: EntryFieldTypes.Text; link: EntryFieldTypes.Text };
};
