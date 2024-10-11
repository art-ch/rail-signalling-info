import { useEffect, useState } from 'react';

import cx from 'classnames';

import { ButtonProps } from 'src/components/atoms/Button';
import { InputProps } from 'src/components/atoms/Input';
import { RichText } from 'src/components/atoms/RichText';
import { FilterPanelProps } from 'src/components/molecules/FilterPanel';

import { ZonePageContentType, ZonePageProps } from './ZonePage.types';
import {
  getContentFilterOptions,
  onContentSearch,
  onPasteIntoContentSearchField,
  onSearchContentFieldKeyDown
} from './ZonePage.utils';

import css from './ZonePage.module.scss';

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

  const { signals, signs, locomotiveSignalization } = content;

  const filterTogglerProps: ButtonProps = {
    size: 'mediumSmall',
    onClick: () => setShowSidebar(!showSidebar)
  };

  const contentSearchInputProps: InputProps = {
    onChange: (event) => onContentSearch({ event, setShownContent }),
    onKeyDown: onSearchContentFieldKeyDown,
    onPaste: onPasteIntoContentSearchField
  };

  const closeFilterSectionHandler = () => {
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
          closeFilterSectionHandler={closeFilterSectionHandler}
          className={css.contentFilters}
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
