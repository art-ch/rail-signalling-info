import { useState } from 'react';

import cx from 'classnames';

import { RichTextContent } from 'contentful';

import { RichText } from 'src/components/atoms/RichText';
import { Button, ButtonProps } from 'src/components/atoms/Button';

import { useSignalContext } from 'src/context/SignalContext';

import { ZonePageContentRenderer } from './ZonePageContentRenderer';
import { ZonePageFilters } from './ZonePageFilters';

import { Signal, Filters, SignalTypeSign, Sign } from 'src/types';

import css from './ZonePage.module.scss';

export type ZonePageContent = {
  signals: Signal[];
  signalTypeSigns: SignalTypeSign[];
  signalFilters: Filters[];
  signs: Sign[];
  signFilters: Filters[];
  locomotiveSignalization: Record<string, unknown>[];
};

export type ZonePageProps = {
  title: string;
  description: string;
  filterToggler: ButtonProps;
  content: ZonePageContent;
  additionalInfo: RichTextContent;
};

export const ZonePage = ({
  title,
  description,
  filterToggler,
  content,
  additionalInfo
}: ZonePageProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const { shownContent } = useSignalContext();

  const filterSectionClickHandlers = () => {
    setShowFilters(false);
  };

  return (
    <div className={css.container}>
      <aside className={cx(css.sidebar, { [css.sidebar_shown]: showFilters })}>
        <ZonePageFilters
          isFilterSectionVisible={showFilters}
          filterSectionClickHandlers={filterSectionClickHandlers}
          className={css.contentFilters}
        />
      </aside>
      <main className={css.content}>
        <div className="pageHeading">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Button
          {...filterToggler}
          className={css.filterToggler}
          onClick={() => setShowFilters(!showFilters)}
        >
          {filterToggler.title}
        </Button>
        <ZonePageContentRenderer
          content={content}
          shownContent={shownContent}
        />
        <RichText content={additionalInfo} />
      </main>
    </div>
  );
};
