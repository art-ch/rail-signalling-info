import cx from 'classnames';
import { RichTextContent } from 'contentful';

import { UIComponent } from '../../../types';
import { RichText } from '../../atoms/RichText';

import css from './InfoPage.module.scss';

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
      <div className={cx('pageHeading', 'pageHeading_withAdditionalMargin')}>
        <h1 className="pageTitle medium">{title}</h1>
      </div>
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
