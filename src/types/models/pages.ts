import { EntryFieldTypes } from 'contentful';

import { ButtonModel } from './atoms';
import { NavigationPageLinkModel } from './molecules';
import { ZonePageContentModel } from './templates';

export type CommonPageFields = {
  url: EntryFieldTypes.Text;
};

export type HeroPageFields = {
  hero: EntryFieldTypes.RichText;
  heroButton: EntryFieldTypes.EntryLink<ButtonModel>;
};

export type ErrorPageModel = {
  contentTypeId: 'errorPage';
  fields: HeroPageFields &
    CommonPageFields & {
      code: EntryFieldTypes.Text;
    };
};

export type HomePageModel = {
  contentTypeId: 'homePage';
  fields: CommonPageFields & HeroPageFields;
};

export type InfoPageModel = {
  contentTypeId: 'infoPage';
  fields: CommonPageFields & {
    title: EntryFieldTypes.Text;
    subtitle: EntryFieldTypes.RichText;
    description: EntryFieldTypes.RichText;
  };
};

export type NavigationPageModel = {
  contentTypeId: 'navigationPage';
  fields: CommonPageFields & {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    links: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<NavigationPageLinkModel>
    >;
  };
};

export type ZonePageModel = {
  contentTypeId: 'zonePage';
  fields: CommonPageFields & {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.EntryLink<ZonePageContentModel>;
    additionalInfo: EntryFieldTypes.RichText;
  };
};
