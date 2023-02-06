import { Asset, Entry, RichTextContent } from 'contentful';
import { UIComponent } from '.';

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
