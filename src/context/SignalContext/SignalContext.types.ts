import { SetState, Signal, Sign } from '../../types';
import { ZonePageContent } from '../../components/pages/ZonePage';
import { ZonePageContentTypes } from '../../components/pages/ZonePage/ZonePageContentRenderer';

export type FilterSignalsProps = {
  event: Event;
  id: number;
  name: string;
  stateSetters: SetState<string>[];
};

export type GetFilteredSignalsProps = {
  signals: Signal[];
  zone: string;
  signalType: string;
};

export type FilterSignsProps = {
  name: string;
  stateSetters: SetState<string>[];
};

export type GetFilteredSignsProps = { signs: Sign[]; signType: string };

export type filterSignals = (props: FilterSignalsProps) => void;
export type getFilteredSignals = (props: GetFilteredSignalsProps) => Signal[];
export type filterSigns = (props: FilterSignsProps) => void;
export type getFilteredSigns = (props: GetFilteredSignsProps) => Sign[];

export type ZoneState = [zone: string, setZone: SetState<string>];
export type SignalTypeState = [
  signalType: string,
  setSignalType: SetState<string>
];
export type SignTypeState = [signType: string, setSignType: SetState<string>];

export type FilterHandlers = [
  filterSignals,
  getFilteredSignals,
  filterSigns,
  getFilteredSigns
];

export type SignalContextProps = {
  content: ZonePageContent;

  zoneState: ZoneState;
  signalTypeState: SignalTypeState;
  signTypeState: SignTypeState;

  shownContent: ZonePageContentTypes;
  setShownContent: SetState<ZonePageContentTypes>;

  filterHandlers: FilterHandlers;
};

export type SignalProviderProps = {
  children: React.ReactNode;
  content: ZonePageContent;
  filterHandlers: FilterHandlers;
};
