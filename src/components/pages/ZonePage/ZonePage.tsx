import { FunctionComponent, useState } from 'react';

import cx from 'classnames';

import { RichTextContent } from 'contentful';

import { RichText } from 'src/components/atoms/RichText';
import { Button, ButtonProps } from 'src/components/atoms/Button';

import { Signal, Filters, SignalTypeSign, Sign, UIComponent } from 'src/types';

import css from './ZonePage.module.scss';
import { FilterPanelProps } from 'src/components/molecules/FilterPanel';
import { getContentFilterOptions } from './ZonePage.utils';

export type ZonePageContentTypes =
  | 'Signals'
  | 'Locomotive Signalization'
  | 'Signs';

export type ZonePageFiltersProps = {
  shownContent: ZonePageContentTypes;
  contentFilter: FilterPanelProps;
  isFilterSectionVisible: boolean;
  filterSectionClickHandlers: () => void;
} & UIComponent;

export type ZonePageContentRendererProps = {
  content: ZonePageContent;
  shownContent: ZonePageContentTypes;
};

export type ZonePageContent = {
  signals: Signal[];
  signalTypeSigns: SignalTypeSign[];
  signalFilters: Filters[];
  signs: Sign[];
  signFilters: Filters[];
  locomotiveSignalization?: Record<string, unknown>[];
};

export type ZonePageMainProps = {
  title: string;
  description: string;
  filterToggler: ButtonProps;
  content: ZonePageContent;
  additionalInfo: RichTextContent;
};

export type ZonePageCustomComponents = {
  Filters: FunctionComponent<ZonePageFiltersProps>;
  ContentRenderer: FunctionComponent<ZonePageContentRendererProps>;
};

export type ZonePageProps = ZonePageMainProps & ZonePageCustomComponents;

export const ZonePage = ({
  title,
  description,
  filterToggler,
  content,
  additionalInfo,
  Filters,
  ContentRenderer
}: ZonePageProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [shownContent, setShownContent] =
    useState<ZonePageContentTypes>('Signals');

  const { signals, signs, locomotiveSignalization } = content;

  const contentFilterOptions = getContentFilterOptions({
    signals,
    signs,
    locomotiveSignalization
  });

  const contentFilter: FilterPanelProps = {
    title: 'Content Filters',
    options: contentFilterOptions,
    filterState: [shownContent, setShownContent]
  };

  const filterSectionClickHandlers = () => {
    setShowSidebar(false);
  };

  return (
    <div className={css.container}>
      <aside className={cx(css.sidebar, { [css.sidebar_shown]: showSidebar })}>
        <Filters
          isFilterSectionVisible={showSidebar}
          shownContent={shownContent}
          contentFilter={contentFilter}
          filterSectionClickHandlers={filterSectionClickHandlers}
          className={css.contentFilters}
        />
      </aside>
      <main className={css.content}>
        <div className="pageHeading">
          <h1 className="pageTitle medium">{title}</h1>
          <p>{description}</p>
        </div>
        <Button
          {...filterToggler}
          className={css.filterToggler}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {filterToggler.title}
        </Button>
        <ContentRenderer content={content} shownContent={shownContent} />
        <RichText content={additionalInfo} />
      </main>
    </div>
  );
};
