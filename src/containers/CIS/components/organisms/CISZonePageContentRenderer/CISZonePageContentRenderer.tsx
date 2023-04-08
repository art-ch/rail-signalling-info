import SignalCards from '../../../content/signals/SignalCards';
import LocomotiveSignals from '../../../content/signals/LocomotiveSignals';
import SignCards from '../../../content/signs/SignCards';

import { ZonePageContentRendererProps } from 'src/components/pages/ZonePage';

export const CISZonePageContentRenderer = ({
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
