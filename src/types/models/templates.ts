import { Entry } from 'contentful';

import { ZonePageContent } from '../../components/pages/ZonePage';

import { HeaderModel, FooterModel } from './organisms';

type LayoutModel<Content> = {
  title: string;
  content: Content;
};

export type ZonePageContentModel = Entry<ZonePageContent>;

export type WebsiteModel = LayoutModel<
  [Entry<HeaderModel>, Entry<FooterModel>]
>;
