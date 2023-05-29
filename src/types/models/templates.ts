import { Entry } from 'contentful';

import { ZonePageContent } from '../../components/pages/ZonePage';

import { HeaderModel, FooterModel } from './organisms/organisms';

type LayoutModel<Content> = {
  title: string;
  content: { [ContentItem in keyof Content]: Entry<Content[ContentItem]> };
};

export type ZonePageContentModel = Entry<ZonePageContent>;

export type WebsiteModel = LayoutModel<[HeaderModel, FooterModel]>;
