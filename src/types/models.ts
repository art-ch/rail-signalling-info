import { Asset, Entry, RichTextContent } from 'contentful';

import { ButtonProps } from '../components/atoms/Button';

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
  links: Entry<{
    title: string;
    link: string;
    description: string;
    background: Asset;
  }>[];
};
