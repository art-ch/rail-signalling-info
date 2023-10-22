import { TopFilterSection } from 'src/components/molecules/TopFilterSection';
import { SignCardList } from 'src/components/organisms/SignCardList';
import { SignalCardList } from 'src/components/organisms/SignalCardList';
import { ZonePageContentRendererProps } from 'src/components/pages/ZonePage/ZonePage.types';
import { useCISSignalContext } from 'src/containers/CIS/context';
import { parseCISAbbreviations } from 'src/containers/CIS/utils';
import { SignalModel, SignModel } from 'src/types';

import {
  CISLocomotiveSignalization,
  CISLocomotiveSignalModel
} from '../CISLocomotiveSignalization';
import { CISSignRenderer } from '../CISSignRenderer';
import { CISSignalRenderer } from '../CISSignalRenderer';

import {
  getContentSearchInputProps,
  getFilteredSignalList,
  getFilteredSignList,
  getSearchedForZonePageContentList
} from './CISZonePageContentRenderer.utils';

import { getCISSignalPageTitle } from './CISZonePageContentRenderer.utils';

export const CISZonePageContentRenderer = ({
  content,
  contentState
}: ZonePageContentRendererProps) => {
  const {
    state: {
      trainProtectionZone,
      signalType,
      signType,
      locomotiveSignalization: locomotiveSignalizationState
    }
  } = useCISSignalContext();

  const { shownContent, shownContentType } = contentState;

  const { predefinedZonePageContent, topFilterSectionContent } = content;
  const {
    signals,
    locomotiveSignalization = [],
    signs
  } = predefinedZonePageContent;
  const { filterToggler, searchInput } = topFilterSectionContent;

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

  if (shownContentType === 'Signals') {
    const pageTitle = getCISSignalPageTitle(trainProtectionZone, signalType);
    const contentSearchInputProps = getContentSearchInputProps({
      input: searchInput,
      pageTitle
    });

    return (
      <>
        <TopFilterSection
          filterToggler={filterToggler}
          searchInput={contentSearchInputProps}
        />
        <SignalCardList
          title={pageTitle}
          signalList={signalList}
          SignalRenderer={CISSignalRenderer}
        />
      </>
    );
  } else if (shownContentType === 'Signs') {
    const pageTitle: string = signType;
    const contentSearchInputProps = getContentSearchInputProps({
      input: searchInput,
      pageTitle
    });

    return (
      <>
        <TopFilterSection
          filterToggler={filterToggler}
          searchInput={contentSearchInputProps}
        />
        <SignCardList
          title={pageTitle}
          signList={signList}
          SignRenderer={CISSignRenderer}
        />
      </>
    );
  } else if (shownContentType === 'Locomotive Signalization') {
    const pageTitle = `${parseCISAbbreviations(
      locomotiveSignalizationState
    )} Locomotive Signalization`;
    const contentSearchInputProps = getContentSearchInputProps({
      input: searchInput,
      pageTitle
    });

    return (
      <>
        <TopFilterSection
          filterToggler={filterToggler}
          searchInput={contentSearchInputProps}
        />
        <CISLocomotiveSignalization
          title={pageTitle}
          locomotiveSignalization={
            locomotiveSignalizationList as CISLocomotiveSignalModel[]
          }
        />
      </>
    );
  } else {
    throw new Error('This zone page content type is missing');
  }
};
