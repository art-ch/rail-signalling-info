import { EntryFieldTypes } from 'contentful';

export type NavLinkModel = {
  contentTypeId: 'link';
  fields: {
    title: EntryFieldTypes.Text;
    link: EntryFieldTypes.Text;
  };
};

export type NavigationPageLinkModel = {
  contentTypeId: 'navigationLink';
  fields: {
    title: EntryFieldTypes.Text;
    link: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
};

export type SignalTypeSignModel = {
  type: string;
  letters: string[];
};
