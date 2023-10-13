import { useEffect, useState } from 'react';

import cx from 'classnames';

import { RichText } from 'src/components/atoms/RichText';
import { ButtonProps } from 'src/components/atoms/Button';

import css from './ZonePage.module.scss';
import { FilterPanelProps } from 'src/components/molecules/FilterPanel';
import {
  getContentFilterOptions,
  onContentSearch,
  onPasteIntoContentSearchField,
  onSearchContentFieldKeyDown
} from './ZonePage.utils';
import { ZonePageContentType, ZonePageProps } from './ZonePage.types';
import { useScroll } from 'src/hooks/useScroll';

import { InputProps } from 'src/components/atoms/Input';

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

  const { signals, signs, locomotiveSignalization } = content;
  const scrollDown = scrollDirection === 'down';

  const filterTogglerProps: ButtonProps = {
    size: 'mediumSmall',
    onClick: () => setShowSidebar(!showSidebar)
  };

  const contentSearchInputProps: InputProps = {
    onChange: (event) => onContentSearch({ event, setShownContent }),
    onKeyDown: onSearchContentFieldKeyDown,
    onPaste: onPasteIntoContentSearchField
  };

  const filterSectionClickHandlers = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [shownContentType, state]);

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
        <ContentRenderer
          content={{
            predefinedZonePageContent: content,
            topFilterSectionContent: {
              filterToggler: filterTogglerProps,
              searchInput: contentSearchInputProps
            }
          }}
          contentState={{
            sidebarState: [showSidebar, setShowSidebar],
            shownContent,
            shownContentType
          }}
        />
        <RichText content={additionalInfo} />
      </main>
    </div>
  );
};
