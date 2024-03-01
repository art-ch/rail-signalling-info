import { RichTextContent } from 'contentful';

import { ButtonModel } from './atoms';
import { NavigationPageLinkModel } from './molecules';
import { ZonePageContentModel } from './templates';

export type ErrorPageModel = {
  code: string;
  hero: RichTextContent;
  heroButton: ButtonModel;
};

export type HomePageModel = {
  hero: RichTextContent;
  heroButton: ButtonModel;
};

export type InfoPageModel = {
  title: string;
  subtitle: RichTextContent;
  description: RichTextContent;
};

export type NavigationPageModel = {
  title: string;
  description: string;
  links: NavigationPageLinkModel[];
};

export type ZonePageModel = {
  title: string;
  description: string;
  content: ZonePageContentModel;
  additionalInfo: RichTextContent;
};
