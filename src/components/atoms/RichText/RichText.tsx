import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

import { UIComponent } from '../../../types';

import {
  applyClassListToRichText,
  RichTextContentClassNameList
} from './RichText.utils';

export type RichTextProps = {
  content: Document;
  classNameList?: RichTextContentClassNameList;
} & UIComponent;

export const RichText = ({
  content,
  classNameList,
  className
}: RichTextProps) => {
  let options: Options = {};

  if (classNameList) {
    options = applyClassListToRichText(classNameList);
  }

  return (
    <div className={className}>
      {documentToReactComponents(content, options)}
    </div>
  );
};
