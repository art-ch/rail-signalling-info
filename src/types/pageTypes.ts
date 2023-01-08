import { RichTextContent } from 'contentful';

export type InfoPageProps = {
  title: string;
  url: string;
  subtitle?: RichTextContent;
  description?: RichTextContent;
};
