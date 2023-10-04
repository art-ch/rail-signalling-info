import { FunctionComponent } from 'react';
import { RichTextContent } from 'contentful';
import { ButtonProps } from 'src/components/atoms/Button';
import {
  FilterPanelProps,
  FilterState
} from 'src/components/molecules/FilterPanel';
import {
  ImageModel,
  LocomotiveSignalizationModel,
  SignalizationFilterListModel,
  SignalModel,
  SignalTypeSignModel,
  SignModel,
  UIComponent
} from 'src/types';
import { CISSignalState } from 'src/containers/CIS/context/CISSignalContext.types';

export type ZonePageContentTypes =
  | 'Signals'
  | 'Locomotive Signalization'
  | 'Signs';

export type ZonePageFiltersProps = {
  shownContent: ZonePageContentTypes;
  contentFilter: FilterPanelProps;
  isFilterSectionVisible: boolean;
  filterSectionClickHandlers: () => void;
} & UIComponent;

export type ZonePageContentRendererProps = {
  content: ZonePageContent;
  shownContent: ZonePageContentTypes;
};

export type ZonePageContent = {
  signals: SignalModel[];
  signalTypeSigns: SignalTypeSignModel[];
  signalFilters: SignalizationFilterListModel[];
  signs: SignModel[];
  imageSigns: ImageModel[];
  signFilters: SignalizationFilterListModel[];
  locomotiveSignalization?: LocomotiveSignalizationModel[];
};

export type ZonePageMainProps = {
  title: string;
  description: string;
  filterToggler: ButtonProps;
  content: ZonePageContent;
  additionalInfo: RichTextContent;
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
