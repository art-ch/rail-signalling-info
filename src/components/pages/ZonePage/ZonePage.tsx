import { useEffect, useState } from 'react';

import cx from 'classnames';

import { RichText } from 'src/components/atoms/RichText';
import { Button } from 'src/components/atoms/Button';

import css from './ZonePage.module.scss';
import { FilterPanelProps } from 'src/components/molecules/FilterPanel';
import { getContentFilterOptions } from './ZonePage.utils';
import { ZonePageContentTypes, ZonePageProps } from './ZonePage.types';
import { useScroll } from 'src/hooks/useScroll';

export const ZonePage = ({
  title,
  description,
  filterToggler,
  content,
  additionalInfo,
  state,
  Filters,
  ContentRenderer
}: ZonePageProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [shownContent, setShownContent] =
    useState<ZonePageContentTypes>('Signals');

  const {
    scrollData: { scrollDirection }
  } = useScroll();

  const scrollDown = scrollDirection === 'down';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [shownContent, state]);

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
          className={cx(css.contentFilters, { [css.translated]: scrollDown })}
        />
      </aside>
      <main className={css.content}>
        <div className="pageHeading">
          <h1 className="pageTitle medium">{title}</h1>
          <p>{description}</p>
        </div>
        <div
          className={cx(css.filterTogglerWrapper, { [css.hidden]: scrollDown })}
        >
          <Button
            {...filterToggler}
            className={css.filterToggler}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {filterToggler.title}
          </Button>
        </div>
        <ContentRenderer content={content} shownContent={shownContent} />
        <RichText content={additionalInfo} />
      </main>
    </div>
  );
};
