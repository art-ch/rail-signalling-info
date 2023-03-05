import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

type ApplyClassListToRichTextProps = {
  [key: `${string}_className`]: string;
};

export type RichTextContentClassNameList = ApplyClassListToRichTextProps;

export const applyClassListToRichText = ({
  h1_className,
  h3_className,
  p_className,
  a_className
}: ApplyClassListToRichTextProps): Options => ({
  renderNode: {
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className={h1_className}>{children}</h1>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className={h3_className}>{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className={p_className}>{children}</p>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className={a_className}>
        {children}
      </a>
    )
  }
});
