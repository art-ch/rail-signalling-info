import {
  CISSignalType,
  CISSignalTypeSimplified,
  CISSignType,
  CISTrainProtectionZone
} from 'src/containers/CIS/context/CISSignalContext.types';
import { GenericOrganismEntityModel, SignalModel, SignModel } from 'src/types';
import {
  GetFilteredSignalsProps,
  GetFilteredSignsProps,
  GetSearchedForContentProps
} from '../CISLocomotiveSignalization';

export const getFilteredSignalList = ({
  signals,
  trainProtectionZone,
  signalType
}: GetFilteredSignalsProps) => {
  const signalTypeSimplified = CISSignalTypeSimplified[signalType];

  const anyOfATPZones =
    trainProtectionZone === CISTrainProtectionZone.ATP ||
    trainProtectionZone === CISTrainProtectionZone.ATP4;

  let filteredSignals: SignalModel[] = [];

  if (trainProtectionZone === CISTrainProtectionZone.All) {
    filteredSignals = signals;
  }

  if (trainProtectionZone === CISTrainProtectionZone.ATP) {
    filteredSignals = [signals[0], signals[14], ...signals.slice(1, 14)];
  }

  if (trainProtectionZone === CISTrainProtectionZone.ATP4) {
    filteredSignals = [
      signals[0],
      signals[29],
      signals[14],
      ...signals.slice(1, 8)
    ];
  }

  if (anyOfATPZones) {
    filteredSignals = filteredSignals.map((aspect) => {
      const anyOfFlickeringSignals =
        aspect.name === 'green-flickering' ||
        aspect.name === 'yellow-flickering';

      if (anyOfFlickeringSignals) {
        return {
          ...aspect,
          info: aspect.info.filter(({ type }) => type === 'block')
        };
      }

      return aspect;
    });
  }

  if (trainProtectionZone === CISTrainProtectionZone.ALTP) {
    filteredSignals = [...signals.slice(18, 26), signals[5]];
  }

  if (trainProtectionZone === CISTrainProtectionZone.SemiATP) {
    filteredSignals = [signals[0], ...signals.slice(3, 8)];
  }

  if (trainProtectionZone === CISTrainProtectionZone.PrivateTP) {
    filteredSignals = [
      signals[0],
      signals[2],
      ...signals.slice(4, 7),
      ...signals.slice(15, 18),
      signals[32],
      signals[29]
    ];
  }

  if (signalType === CISSignalType.All) {
    if (trainProtectionZone !== CISTrainProtectionZone.All) {
      return filteredSignals.map((aspect) => {
        if (aspect.name !== 'red') {
          return {
            ...aspect,
            info: aspect.info.filter(({ type }) => type !== 'main')
          };
        }
        return aspect;
      });
    }
    return filteredSignals;
  } else if (signalType === CISSignalType.Main) {
    return filteredSignals.map((aspect) => {
      if (aspect.name !== 'red') {
        return {
          ...aspect,
          info: aspect.info.filter(
            ({ type }) => type === 'main' || type === 'shunting'
          )
        };
      }
      return aspect;
    });
  } else {
    return filteredSignals
      .map((aspect) => {
        const signalTypeWithoutRedLight =
          signalType === CISSignalType.Conditional ||
          signalType === CISSignalType.Shunting ||
          signalType === CISSignalType.Warning ||
          signalType === CISSignalType.Other;

        return {
          ...aspect,
          info: aspect.info.filter(({ type }) => {
            const requiredInfoOmittingRedSignal = type === signalTypeSimplified;
            const requiredInfo =
              requiredInfoOmittingRedSignal || aspect.name === 'red';

            const info = signalTypeWithoutRedLight
              ? requiredInfoOmittingRedSignal
              : requiredInfo;

            return info;
          })
        };
      })
      .filter(({ info }) => info.length);
  }
};

export const getFilteredSignList = ({
  signs,
  signType
}: GetFilteredSignsProps) => {
  let filteredSigns: SignModel[] = [];

  switch (signType) {
    case CISSignType.Hand:
      filteredSigns = [...signs.slice(0, 10)];
      break;
    case CISSignType.Pointers:
      filteredSigns = [...signs.slice(10, 18)];
      break;
    case CISSignType.OtherTextless:
      filteredSigns = [...signs.slice(18, 34)];
      break;
    case CISSignType.Text:
      filteredSigns = [...signs.slice(34)];
      break;
    default:
      filteredSigns = signs;
      break;
  }

  return filteredSigns;
};

export const getSearchedForZonePageContentList = ({
  contentList,
  shownContent
}: GetSearchedForContentProps) => {
  if (!shownContent) return contentList;

  const filtrationResult = (contentList as GenericOrganismEntityModel[]).filter(
    (contentListItem) => {
      const contentListItemName = contentListItem.displayName.toLowerCase();
      const searchWords = shownContent.toLowerCase().split(' ');

      return searchWords.every((word) => contentListItemName.includes(word));
    }
  ) as typeof contentList;

  return filtrationResult;
};

export const getCISSignalCardListTitle = (
  trainProtectionZone: CISTrainProtectionZone,
  signalType: CISSignalType
) => {
  const isAllTrainProtectionZonesShown =
    trainProtectionZone === CISTrainProtectionZone.All;
  const isAllSignalTypesShown = signalType === CISSignalType.All;

  switch (true) {
    case !isAllTrainProtectionZonesShown:
      return `${trainProtectionZone} Signals`;
    case !isAllSignalTypesShown:
      return signalType;
    default:
      return 'All Signals';
  }
};
