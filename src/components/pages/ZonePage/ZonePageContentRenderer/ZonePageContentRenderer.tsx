import SignalCards from '../../../../containers/CIS/content/signals/SignalCards';
import LocomotiveSignals from '../../../../containers/CIS/content/signals/LocomotiveSignals';
import SignCards from '../../../../containers/CIS/content/signs/SignCards';

import { ZonePageContent } from '../ZonePage';

export type ZonePageContentTypes =
  | 'Signals'
  | 'Locomotive Signalization'
  | 'Signs';

export type ZonePageContentRendererProps = {
  content: ZonePageContent;
  shownContent: ZonePageContentTypes;
};

export const ZonePageContentRenderer = ({
  content,
  shownContent
}: ZonePageContentRendererProps) => {
  const { signals, locomotiveSignalization, signs } = content;

  switch (shownContent) {
    case 'Signals':
      return <SignalCards signals={signals} />;
    case 'Locomotive Signalization':
      return (
        <LocomotiveSignals locomotiveSignalization={locomotiveSignalization} />
      );
    case 'Signs':
      return <SignCards signs={signs} />;
    default:
      throw new Error('This zone page content type is missing');
  }
};
