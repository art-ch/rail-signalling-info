import { FunctionComponent } from 'react';

import { Document } from '@contentful/rich-text-types';
import { AssetFields } from 'contentful';

import {
  FilterPanelProps,
  FilterState
} from 'src/components/molecules/FilterPanel';
import { CISSignalState } from 'src/containers/CIS/context/CISSignalContext.types';
import {
  LocomotiveSignalizationModel,
  SetState,
  SignalizationFilterListModel,
  SignalModel,
  SignalTypeSignModel,
  SignModel,
  UIComponent
} from 'src/types';

import { TopFilterSectionProps } from '../../molecules/TopFilterSection';

export type ZonePageContentType =
  | 'Signals'
  | 'Locomotive Signalization'
  | 'Signs';

export type ZonePageFiltersProps = {
  shownContentType: ZonePageContentType;
  contentFilter: FilterPanelProps;
  isFilterSectionVisible: boolean;
  filterSectionClickHandlers: () => void;
} & UIComponent;

export type ZonePageContentRendererProps = {
  content: {
    predefinedZonePageContent: ZonePageContent;
    topFilterSectionContent: TopFilterSectionProps;
  };
  contentState: {
    sidebarState: [boolean, SetState<boolean>];
    shownContent: string;
    shownContentType: ZonePageContentType;
  };
};

export type ZonePageContent = {
  signals: SignalModel[];
  signalTypeSigns: SignalTypeSignModel[];
  signalFilters: SignalizationFilterListModel[];
  signs: SignModel[];
  imageSigns?: AssetFields[];
  signFilters: SignalizationFilterListModel[];
  locomotiveSignalization?: LocomotiveSignalizationModel[];
  locomotiveSignalizationFilters?: SignalizationFilterListModel[];
};

export type ZonePageMainProps = {
  title: string;
  description: string;
  content: ZonePageContent;
  additionalInfo: Document;
};

export type ZoneSpecificZonePageSignalState = CISSignalState;

export type ZoneSpecificZonePageProps = {
  state: ZoneSpecificZonePageSignalState;
  Filters: FunctionComponent<ZonePageFiltersProps>;
  ContentRenderer: FunctionComponent<ZonePageContentRendererProps>;
};

export type ZonePageProps = ZonePageMainProps & ZoneSpecificZonePageProps;

export type GetContentFilterOptionsProps = Omit<
  ZonePageContent,
  'signalTypeSigns' | 'imageSigns' | `${string}Filters`
>;

export type GetMainFiltersProps = {
  filters: SignalizationFilterListModel[];
  state: FilterState[];
  additionalClickHandler?: () => void;
};

export type OnContentSearchProps = {
  event: React.ChangeEvent<HTMLInputElement>;
  setShownContent: SetState<string>;
};
