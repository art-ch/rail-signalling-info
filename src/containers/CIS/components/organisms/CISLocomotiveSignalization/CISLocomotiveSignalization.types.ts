import {
  CISSignalType,
  CISSignType,
  CISTrainProtectionZone
} from 'src/containers/CIS/context/CISSignalContext.types';
import {
  LocomotiveSignalizationModel,
  SignalInfo,
  SignalLights
} from 'src/types';

import { SignModel, SignalModel, GenericOrganismEntityModel } from 'src/types';

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

export type CISLocomotiveSignalModel = LocomotiveSignalizationModel<{
  info: Omit<SignalInfo, 'type'>;
  lights: SignalLights | 'active';
}>;

export type CISLocomotiveSignalizationProps = {
  title: string;
  locomotiveSignalization: CISLocomotiveSignalModel[];
};
