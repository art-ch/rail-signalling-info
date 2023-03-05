// move in scope of reworking of signal renderer
import SignalFilterButtons from '../../../containers/CIS/content/signals/SignalFilterButtons';
import SignalCards from '../../../containers/CIS/content/signals/SignalCards';
import LocomotiveSignals from '../../../containers/CIS/content/signals/LocomotiveSignals';
import SignFilterButtons from '../../../containers/CIS/content/signs/SignFilterButtons';
import SignCards from '../../../containers/CIS/content/signs/SignCards';
// -----------

import { useRouter } from 'next/router';

import { RichTextContent } from 'contentful';

import { RichText } from '../../atoms/RichText';

import { Signal, Filters, SignalTypeSign, Sign } from '../../../types';
import { usePageContext } from './ZonePage.utils';

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
  const { route } = useRouter();

  const zoneName = route.replace('/zones/', '');

  const Context = usePageContext(zoneName);

  const {
    signals,
    signalFilters,
    signs,
    signFilters,
    locomotiveSignalization
  } = content;

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
        {/* transform into separate renderer to make ZonePage abstract */}
        <SignalCards signals={signals} />
        <LocomotiveSignals locomotiveSignalization={locomotiveSignalization} />
        <SignCards signs={signs} />
        {/* ----------- */}
        <RichText content={additionalInfo} />
      </main>
    </>
  );
};
