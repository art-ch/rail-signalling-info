import { RichTextContent } from 'contentful';
import cx from 'classnames';

import { RichText } from '../../atoms/RichText';

import css from './InfoPage.module.scss';

import { UIComponent } from '../../../types';

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
    <main className={cx(css.container, className)}>
      <h1 className="pageHeading">{title}</h1>
      {isContentAvailable && (
        <section className={css.content}>
          {subtitle && <RichText content={subtitle} className={css.subtitle} />}
          {description && (
            <RichText content={description} className={css.description} />
          )}
        </section>
      )}
    </main>
  );
};
