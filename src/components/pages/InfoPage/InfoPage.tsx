import { RichTextContent } from 'contentful';

import { RichText } from '../../atoms/RichText';

import { UIComponent } from '../../../types';

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
  const isContentAvailable = subtitle || description;

  return (
    <StyledWrapper className={className}>
      <h1 className="page-heading">{title}</h1>
      {isContentAvailable && (
        <section>
          {subtitle && <RichText content={subtitle} className="subtitle" />}
          {description && (
            <RichText content={description} className="description" />
          )}
        </section>
      )}
    </StyledWrapper>
  );
};
