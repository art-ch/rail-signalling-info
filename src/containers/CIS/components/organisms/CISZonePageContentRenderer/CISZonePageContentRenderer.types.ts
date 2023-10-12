import {
  CISSignalType,
  CISSignType,
  CISTrainProtectionZone
} from 'src/containers/CIS/context/CISSignalContext.types';
import { SignalModel, SignModel } from 'src/types';
import { CISLocomotiveSignalModel } from '../CISLocomotiveSignalization';

export type GetFilteredSignalsProps = {
  signals: SignalModel[];
  trainProtectionZone: CISTrainProtectionZone;
  signalType: CISSignalType;
};

export type GetFilteredSignsProps = {
  signs: SignModel[];
  signType: CISSignType;
};

export type GetSearchedForContentProps = {
  contentList: SignalModel[] | SignModel[] | CISLocomotiveSignalModel[];
  shownContent: string;
};
