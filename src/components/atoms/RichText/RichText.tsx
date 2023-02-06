import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { UIComponent } from '../../../types';

export type RichTextProps = {
  content: any;
} & UIComponent;

export const RichText = ({ content, className }: RichTextProps) => {
  return <div className={className}>{documentToReactComponents(content)}</div>;
};
