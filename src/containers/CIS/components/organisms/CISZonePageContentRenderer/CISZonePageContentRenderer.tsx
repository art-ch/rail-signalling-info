import { CISSignalRenderer } from '../CISSignalRenderer';
import { CISSignRenderer } from '../CISSignRenderer';
import {
  CISLocomotiveSignalModel,
  CISLocomotiveSignalization
} from '../CISLocomotiveSignalization/';

import { useCISSignalContext } from 'src/containers/CIS/context';

import { ZonePageContentRendererProps } from 'src/components/pages/ZonePage';
import { SignalCardList } from 'src/components/organisms/SignalCardList';
import { SignCardList } from 'src/components/organisms/SignCardList';
import {
  getFilteredSignalList,
  getFilteredSignList
} from 'src/containers/CIS/utils';

export const CISZonePageContentRenderer = ({
  content,
  shownContent
}: ZonePageContentRendererProps) => {
  const {
    state: { trainProtectionZone, signalType, signType }
  } = useCISSignalContext();

  const { signals, locomotiveSignalization = [], signs } = content;

  const filteredSignalList = getFilteredSignalList({
    signals,
    trainProtectionZone,
    signalType
  });

  const filteredSignList = getFilteredSignList({ signs, signType });

  switch (shownContent) {
    case 'Signals':
      return (
        <SignalCardList
          title={'Signals'}
          signalList={filteredSignalList}
          SignalRenderer={CISSignalRenderer}
        />
      );
    case 'Signs':
      return (
        <SignCardList
          title={'Signs'}
          signList={filteredSignList}
          SignRenderer={CISSignRenderer}
        />
      );
    case 'Locomotive Signalization':
      return (
        <CISLocomotiveSignalization
          title={'Locomotive Signalization'}
          locomotiveSignalization={
            locomotiveSignalization as CISLocomotiveSignalModel[]
          }
        />
      );
    default:
      throw new Error('This zone page content type is missing');
  }
};
