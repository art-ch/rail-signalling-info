import { Entry, Asset } from 'contentful';

import { ZonePageContent } from '../../components/pages/ZonePage/ZonePage.types';

import { HeaderModel, FooterModel } from './organisms/organisms';

type LayoutModel<Content> = {
  title: string;
  content: { [ContentItem in keyof Content]: Entry<Content[ContentItem]> };
};

export type ZonePageContentModel = Entry<
  Omit<ZonePageContent, 'imageSigns'> & { imageSigns: Asset[] }
>;

export type WebsiteModel = LayoutModel<[HeaderModel, FooterModel]>;
