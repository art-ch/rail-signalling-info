import { Sign, Signal } from 'src/types';
import {
  CISSignalType,
  CISSignalTypeSimplified,
  CISSignType,
  CISTrainProtectionZone
} from '../context/CISSignalContext.types';

export type GetFilteredSignalsProps = {
  signals: Signal[];
  trainProtectionZone: CISTrainProtectionZone;
  signalType: CISSignalType;
};

export type GetFilteredSignsProps = { signs: Sign[]; signType: CISSignType };

export const getFilteredSignalList = ({
  signals,
  trainProtectionZone,
  signalType
}: GetFilteredSignalsProps) => {
  const signalTypeSimplified = CISSignalTypeSimplified[signalType];

  const anyOfATPZones =
    trainProtectionZone === CISTrainProtectionZone.ATP ||
    trainProtectionZone === CISTrainProtectionZone.ATP4;

  let filteredSignals: Signal[] = [];

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
        return {
          ...aspect,
          info: aspect.info.filter(({ type }) =>
            CISSignalType.Shunting ||
            CISSignalType.Warning ||
            CISSignalType.Other
              ? type === signalTypeSimplified
              : type === signalTypeSimplified || aspect.name === 'red'
          )
        };
      })
      .filter(({ info }) => info.length);
  }
};

export const getFilteredSignList = ({
  signs,
  signType
}: GetFilteredSignsProps) => {
  let filteredSigns: Sign[] = [];

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
