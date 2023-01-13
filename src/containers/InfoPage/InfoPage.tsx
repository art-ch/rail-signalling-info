import { RichTextContent } from 'contentful';

import { RichText } from '../../components/cms/RichText';

import { UIComponent } from '../../types';

import StyledWrapper from './InfoPage.styled';

export type InfoPageProps = {
  title: string;
  subtitle?: RichTextContent;
  description?: RichTextContent;
} & UIComponent;

export const InfoPage = ({
  title,
  subtitle,
  description,
  className
}: InfoPageProps) => {
  return (
    <StyledWrapper className={className}>
      <h1>{title}</h1>
      {subtitle && <RichText content={subtitle} />}
      {description && <RichText content={description} />}
    </StyledWrapper>
  );
};
