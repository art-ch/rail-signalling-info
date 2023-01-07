import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export type RichTextProps = {
  description: any;
};

export const RichText = ({ description }: RichTextProps) => {
  return <div>{documentToReactComponents(description)}</div>;
};
