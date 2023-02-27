import { Asset, Entry, RichTextContent } from 'contentful';

import { ButtonProps } from '../components/atoms/Button';

import { ZonePageContent } from '../components/pages/ZonePage';

type NavigationLinkModel = Entry<{
  title: string;
  link: string;
  description: string;
  background: Asset;
}>;

type ZonePageContentModel = Entry<ZonePageContent>;

export type HomePageModel = {
  background: Asset;
  hero: RichTextContent;
  button: Entry<ButtonProps>;
};

export type InfoPageModel = {
  title: string;
  subtitle: RichTextContent;
  description: RichTextContent;
};

export type NavigationPageModel = {
  title: string;
  description: string;
  links: NavigationLinkModel[];
};

export type ZonePageModel = {
  title: string;
  description: string;
  content: ZonePageContentModel;
  additionalInfo: RichTextContent;
};
