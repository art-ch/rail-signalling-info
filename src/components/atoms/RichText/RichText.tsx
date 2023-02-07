import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer';

import {
  applyClassListToRichText,
  RichTextContentClassNameList
} from './RichText.utils';

import { UIComponent } from '../../../types';

export type RichTextProps = {
  content: any;
  classNameList?: RichTextContentClassNameList;
} & UIComponent;

export const RichText = ({
  content,
  classNameList,
  className
}: RichTextProps) => {
  let options: Options;

  if (classNameList) {
    options = applyClassListToRichText(classNameList);
  }

  return (
    <div className={className}>
      {documentToReactComponents(content, options)}
    </div>
  );
};
