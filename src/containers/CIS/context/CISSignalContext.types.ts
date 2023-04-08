import {
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

export enum CISSignType {
  All = 'All Signs',
  Hand = 'Hand Signs',
  Pointers = 'Signal Pointers',
  OtherTextless = 'Other Textless Signs',
  Text = 'Text Signs'
}

export type CISSignalState = {
  allSignalsState: [CISSignalType.All | false, () => void];
  trainProtectionZoneState: TrainProtectionZoneState<CISTrainProtectionZone>;
  signalState: SignalTypeState<CISSignalType>;
  signState: SignTypeState<CISSignType>;
};

export type CISSignalContextProps = SignalContextProps<CISSignalState>;
