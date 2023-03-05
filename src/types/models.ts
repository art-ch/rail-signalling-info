import { Asset, Entry, RichTextContent } from 'contentful';

import { ButtonProps } from '../components/atoms/Button';
import { HeaderProps } from '../components/molecules/Header';
import { FooterProps } from '../components/molecules/Footer';

import { ZonePageContent } from '../components/pages/ZonePage';

type NavigationLinkModel = Entry<{
  title: string;
  link: string;
  description: string;
  background: Asset;
}>;

type ZonePageContentModel = Entry<ZonePageContent>;

type LayoutModel<Content> = {
  title: string;
  content: Entry<any>[];
};

export type WebsiteModel = LayoutModel<{
  header: Entry<HeaderProps>;
  footer: Entry<FooterProps>;
}>;

export type HomePageModel = {
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
