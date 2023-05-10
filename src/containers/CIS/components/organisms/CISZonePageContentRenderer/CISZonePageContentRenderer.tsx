import { Signal as SignalRenderer } from 'src/containers/CIS/content/signals/content/ecosystems';
import { Sign as SignRenderer } from 'src/containers/CIS/content/signs/SignCards';
import {
  CISLocomotiveSignal,
  CISLocomotiveSignalization
} from '../CISLocomotiveSignalization/';

import { ZonePageContentRendererProps } from 'src/components/pages/ZonePage';
import { SignalCardList } from 'src/components/organisms/SignalCardList';
import { SignCardList } from 'src/components/organisms/SignCardList';

export const CISZonePageContentRenderer = ({
  content,
  shownContent
}: ZonePageContentRendererProps) => {
  const { signals, locomotiveSignalization = [], signs } = content;

  switch (shownContent) {
    case 'Signals':
      return (
        <SignalCardList
          title={'Signals'}
          signalList={signals}
          SignalRenderer={SignalRenderer}
        />
      );
    case 'Signs':
      return (
        <SignCardList
          title={'Signs'}
          signList={signs}
          SignRenderer={SignRenderer}
        />
      );
    case 'Locomotive Signalization':
      return (
        <CISLocomotiveSignalization
          title={'Locomotive Signalization'}
          locomotiveSignalization={
            locomotiveSignalization as CISLocomotiveSignal[]
          }
        />
      );
    default:
      throw new Error('This zone page content type is missing');
  }
};
