// move in scope of reworking of signal renderer
import SignalFilterButtons from '../../../containers/CIS/content/signals/SignalFilterButtons';
import SignFilterButtons from '../../../containers/CIS/content/signs/SignFilterButtons';
// -----------

import { RichTextContent } from 'contentful';

import { RichText } from '../../atoms/RichText';

import { Signal, Filters, SignalTypeSign, Sign } from '../../../types';
import { FilterPanel } from '../../molecules/FilterPanel';
import { useSignalContext } from '../../../context/SignalContext';
import { getContentFilterOptions } from './ZonePageUtils';
import { ZonePageContentRenderer } from './ZonePageContentRenderer';

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
  content: ZonePageContent;
  additionalInfo: RichTextContent;
};

export const ZonePage = ({
  title,
  description,
  content,
  additionalInfo
}: ZonePageProps) => {
  const {
    signals,
    signalFilters,
    signs,
    signFilters,
    locomotiveSignalization
  } = content;

  const { shownContent, setShownContent } = useSignalContext();

  const contentFilterOptions = getContentFilterOptions({
    signals,
    locomotiveSignalization,
    signs
  });

  return (
    <>
      <aside className="filter-panel">
        <nav>
          {/* rework filters */}
          <SignalFilterButtons signalFilters={signalFilters} />
          <SignFilterButtons signFilters={signFilters} />
        </nav>
      </aside>
      <main className="content">
        <div className="page-heading">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <FilterPanel
          options={contentFilterOptions}
          filterState={[shownContent, setShownContent]}
        />
        <ZonePageContentRenderer
          content={content}
          shownContent={shownContent}
        />
        <RichText content={additionalInfo} />
      </main>
    </>
  );
};
