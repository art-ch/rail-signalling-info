import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export type RichTextProps = {
  content: any;
};

export const RichText = ({ content }: RichTextProps) => {
  return <div>{documentToReactComponents(content)}</div>;
};
