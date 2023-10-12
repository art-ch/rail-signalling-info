import { CISSignalRenderer } from '../CISSignalRenderer';
import { CISSignRenderer } from '../CISSignRenderer';
import {
  CISLocomotiveSignalization,
  CISLocomotiveSignalModel
} from '../CISLocomotiveSignalization';

import { useCISSignalContext } from 'src/containers/CIS/context';

import { ZonePageContentRendererProps } from 'src/components/pages/ZonePage/ZonePage.types';
import { SignalCardList } from 'src/components/organisms/SignalCardList';
import { SignCardList } from 'src/components/organisms/SignCardList';
import {
  getFilteredSignalList,
  getFilteredSignList,
  getSearchedForZonePageContentList
} from './CISZonePageContentRenderer.utils';

import { getCISSignalCardListTitle } from './CISZonePageContentRenderer.utils';
import { SignalModel, SignModel } from 'src/types';

export const CISZonePageContentRenderer = ({
  content,
  shownContent,
  shownContentType
}: ZonePageContentRendererProps) => {
  const {
    state: {
      trainProtectionZone,
      signalType,
      signType,
      locomotiveSignalization: locomotiveSignalizationState
    }
  } = useCISSignalContext();

  const { signals, locomotiveSignalization = [], signs } = content;

  const filteredSignalList = getFilteredSignalList({
    signals,
    trainProtectionZone,
    signalType
  });

  const filteredSignList = getFilteredSignList({ signs, signType });

  const signalList = getSearchedForZonePageContentList({
    contentList: filteredSignalList,
    shownContent
  }) as SignalModel[];

  const signList = getSearchedForZonePageContentList({
    contentList: filteredSignList,
    shownContent
  }) as SignModel[];

  const locomotiveSignalizationList = getSearchedForZonePageContentList({
    contentList: locomotiveSignalization as CISLocomotiveSignalModel[],
    shownContent
  });

  const signalCardListTitle = getCISSignalCardListTitle(
    trainProtectionZone,
    signalType
  );

  switch (shownContentType) {
    case 'Signals':
      return (
        <SignalCardList
          title={signalCardListTitle}
          signalList={signalList}
          SignalRenderer={CISSignalRenderer}
        />
      );
    case 'Signs':
      return (
        <SignCardList
          title={signType}
          signList={signList}
          SignRenderer={CISSignRenderer}
        />
      );
    case 'Locomotive Signalization':
      return (
        <CISLocomotiveSignalization
          title={`${locomotiveSignalizationState} Locomotive Signalization`}
          locomotiveSignalization={
            locomotiveSignalizationList as CISLocomotiveSignalModel[]
          }
        />
      );
    default:
      throw new Error('This zone page content type is missing');
  }
};
