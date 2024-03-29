import {
  LocomotiveSignalizationState,
  SignalContextProps,
  SignalTypeState,
  SignTypeState,
  TrainProtectionZoneState
} from 'src/types/context';

export enum CISTrainProtectionZone {
  All = 'All Train Protection Zones',
  ATP = 'ATP Zone',
  ATP4 = '4 Aspect ATP Zone',
  ALTP = 'ALTP Zone',
  SemiATP = 'Semi-ATP Zone',
  PrivateTP = 'Private TP Zone'
}

export enum CISSignalType {
  All = 'All Signals',
  Main = 'Main Aspects',
  HighSpeedSwitch = 'HS Switch Aspects',
  Entry = 'Entry Signals',
  Exit = 'Exit Signals',
  Invitational = 'Invitational Signals',
  Route = 'Route Signals',
  Block = 'Block Signals',
  Conditional = 'Conditional Signals',
  Cover = 'Cover Signals',
  Obstruction = 'Obstruction Signals',
  Warning = 'Warning Signals',
  Repeating = 'Repeating Signals',
  Industrial = 'Industrial Signals',
  Technological = 'Technological Signals',
  Shunting = 'Shunting Signals',
  Humping = 'Humping Signals',
  Special = 'Special Signals',
  Other = 'Other Signal Aspects'
}

export const CISSignalTypeSimplified = {
  [CISSignalType.All]: 'all',
  [CISSignalType.Main]: 'main',
  [CISSignalType.HighSpeedSwitch]: 'fast',
  [CISSignalType.Entry]: 'entry',
  [CISSignalType.Exit]: 'exit',
  [CISSignalType.Invitational]: 'invitational',
  [CISSignalType.Route]: 'route',
  [CISSignalType.Block]: 'block',
  [CISSignalType.Conditional]: 'conditional',
  [CISSignalType.Cover]: 'cover',
  [CISSignalType.Obstruction]: 'obstruction',
  [CISSignalType.Warning]: 'warning',
  [CISSignalType.Repeating]: 'repeating',
  [CISSignalType.Industrial]: 'industrial',
  [CISSignalType.Technological]: 'technological',
  [CISSignalType.Shunting]: 'shunting',
  [CISSignalType.Humping]: 'humping',
  [CISSignalType.Special]: 'special',
  [CISSignalType.Other]: 'other'
};

export enum CISSignType {
  All = 'All Signs',
  Hand = 'Hand Signs',
  Pointers = 'Signal Pointers',
  OtherTextless = 'Other Textless Signs',
  Text = 'Text Signs'
}

export enum CISLocomotiveSignalization {
  Regular = 'Regular',
  ALTP = 'ALTP Zone'
}

export type CISSignalState = {
  allSignals: CISSignalType | false;
  trainProtectionZone: CISTrainProtectionZone;
  signalType: CISSignalType;
  signType: CISSignType;
  locomotiveSignalization: CISLocomotiveSignalization;
};

export type CISSignalStateWithHandlers = {
  allSignalsState: [CISSignalType.All | false, () => void];
  trainProtectionZoneState: TrainProtectionZoneState<CISTrainProtectionZone>;
  signalTypeState: SignalTypeState<CISSignalType>;
  signTypeState: SignTypeState<CISSignType>;
  locomotiveSignalizationState: LocomotiveSignalizationState<CISLocomotiveSignalization>;
};

export type CISSignalContextProps = SignalContextProps<
  CISSignalState,
  CISSignalStateWithHandlers
>;
