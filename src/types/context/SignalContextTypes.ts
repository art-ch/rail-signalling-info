import { ZonePageContent } from '../../components/pages/ZonePage/ZonePage.types';
import { SetState } from '../utilityTypes';

export type TrainProtectionZoneState<ZoneSpecificTrainProtectionZoneState> = [
  trainProtectionZone: ZoneSpecificTrainProtectionZoneState,
  setTrainProtectionZone: SetState<ZoneSpecificTrainProtectionZoneState>
];
export type SignalTypeState<ZoneSpecificSignalTypeState> = [
  signalType: ZoneSpecificSignalTypeState,
  setSignalType: SetState<ZoneSpecificSignalTypeState>
];
export type SignTypeState<ZoneSpecificSignTypeState> = [
  signType: ZoneSpecificSignTypeState,
  setSignType: SetState<ZoneSpecificSignTypeState>
];
export type LocomotiveSignalizationState<
  ZoneSpecificLocomotiveSignalizationState
> = [
  signType: ZoneSpecificLocomotiveSignalizationState,
  setSignType: SetState<ZoneSpecificLocomotiveSignalizationState>
];

export type SignalProviderProps = {
  children: React.ReactNode;
  content: ZonePageContent;
};

export type SignalContextProps<
  ZoneSpecificState,
  ZoneSpecificStateWithHandlers
> = {
  content: ZonePageContent;
  state: ZoneSpecificState;
  stateWithHandlers: ZoneSpecificStateWithHandlers;
};
