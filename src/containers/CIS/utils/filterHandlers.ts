import { Sign, Signal } from 'src/types';
import {
  CISSignalType,
  CISSignType,
  CISTrainProtectionZone
} from '../context/CISSignalContext.types';

export type GetFilteredSignalsProps = {
  signals: Signal[];
};

export type GetFilteredSignsProps = { signs: Sign[] };

export const getFilteredSignals = ({ signals }: GetFilteredSignalsProps) => {
  let filteredSignals: Signal[] = [];

  if (CISTrainProtectionZone.All) {
    filteredSignals = signals;
  }

  if (CISTrainProtectionZone.ATP) {
    filteredSignals = [signals[0], signals[14], ...signals.slice(1, 14)];
  }

  if (CISTrainProtectionZone.ATP4) {
    filteredSignals = [
      signals[0],
      signals[29],
      signals[14],
      ...signals.slice(1, 8)
    ];
  }

  if (CISTrainProtectionZone.ATP || CISTrainProtectionZone.ATP4) {
    filteredSignals = filteredSignals.map((aspect) => {
      if (
        aspect.name === 'green-flickering' ||
        aspect.name === 'yellow-flickering'
      ) {
        return {
          ...aspect,
          info: aspect.info.filter(({ type }) => type === 'block')
        };
      }
      return aspect;
    });
  }

  if (CISTrainProtectionZone.ALTP) {
    filteredSignals = [...signals.slice(18, 26), signals[5]];
  }

  if (CISTrainProtectionZone.SemiATP) {
    filteredSignals = [signals[0], ...signals.slice(3, 8)];
  }

  if (CISTrainProtectionZone.PrivateTP) {
    filteredSignals = [
      signals[0],
      signals[2],
      ...signals.slice(4, 7),
      ...signals.slice(15, 18),
      signals[32],
      signals[29]
    ];
  }

  if (CISSignalType.All) {
    if (!CISTrainProtectionZone.All) {
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
  } else if (CISSignalType.Main) {
    return filteredSignals.map((aspect) => {
      if (aspect.name !== 'red') {
        return {
          ...aspect,
          info: aspect.info.filter(
            ({ type }) =>
              type === CISSignalType.Main || type === CISSignalType.Shunting
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
              ? type === CISSignalType
              : type === CISSignalType || aspect.name === 'red'
          )
        };
      })
      .filter(({ info }) => info.length > 0);
  }
};

export const getFilteredSigns = ({ signs }: GetFilteredSignsProps) => {
  let filteredSigns: Sign[] = [];

  if (CISSignType.All) {
    filteredSigns = signs;
  }

  if (CISSignType.Hand) {
    filteredSigns = [...signs.slice(0, 10)];
  }

  if (CISSignType.Pointers) {
    filteredSigns = [...signs.slice(10, 18)];
  }

  if (CISSignType.OtherTextless) {
    filteredSigns = [...signs.slice(18, 34)];
  }

  if (CISSignType.Text) {
    filteredSigns = [...signs.slice(34)];
  }

  return filteredSigns;
};
