import { useEffect, useState } from 'react';
import { GoFilter } from 'react-icons/go';

import cx from 'classnames';

import { RichText } from 'src/components/atoms/RichText';
import { Button } from 'src/components/atoms/Button';

import css from './ZonePage.module.scss';
import { FilterPanelProps } from 'src/components/molecules/FilterPanel';
import { getContentFilterOptions } from './ZonePage.utils';
import { ZonePageContentType, ZonePageProps } from './ZonePage.types';
import { useScroll } from 'src/hooks/useScroll';

import { Input } from 'src/components/atoms/Input';

export const ZonePage = ({
  title,
  description,
  content,
  additionalInfo,
  state,
  Filters,
  ContentRenderer
}: ZonePageProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [shownContentType, setShownContentType] =
    useState<ZonePageContentType>('Signals');
  const [shownContent, setShownContent] = useState<string>('');

  const {
    scrollData: { scrollDirection }
  } = useScroll();
  const scrollDown = scrollDirection === 'down';

  const { signals, signs, locomotiveSignalization } = content;

  const contentFilterOptions = getContentFilterOptions({
    signals,
    signs,
    locomotiveSignalization
  });

  const contentFilter: FilterPanelProps = {
    title: 'Content Filters',
    options: contentFilterOptions,
    filterState: [shownContentType, setShownContentType]
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShownContent(event.target.value);
  };

  const filterSectionClickHandlers = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [shownContentType, state]);

  return (
    <div className={css.container}>
      <aside className={cx(css.sidebar, { [css.sidebar_shown]: showSidebar })}>
        <Filters
          isFilterSectionVisible={showSidebar}
          shownContentType={shownContentType}
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
          className={cx(css.topFilterOuterWrapper, {
            [css.hidden]: scrollDown
          })}
        >
          <div className={css.topFilterInnerWrapper}>
            <Button
              size="mediumSmall"
              className={css.filterToggler}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <GoFilter className={css.filterToggler__icon} />
            </Button>
            <Input
              onChange={onSearch}
              placeholder={`Search ${shownContentType}`}
            />
          </div>
        </div>
        <ContentRenderer
          content={content}
          shownContent={shownContent}
          shownContentType={shownContentType}
        />
        <RichText content={additionalInfo} />
      </main>
    </div>
  );
};
