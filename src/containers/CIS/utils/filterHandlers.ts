import {
  FilterSignalsProps,
  GetFilteredSignalsProps,
  FilterSignsProps,
  GetFilteredSignsProps
} from '../../../context/SignalContext/SignalContext.types';

import { Sign, Signal } from '../../../types';

export const filterSignals = ({
  event,
  id,
  name,
  stateSetters
}: FilterSignalsProps) => {
  const [setZone, setSignalType] = stateSetters;

  const firstButton = (event.target as HTMLButtonElement)?.parentElement
    ?.parentElement?.firstElementChild?.firstElementChild;

  if (id === 1) {
    firstButton?.classList.add('active');
  } else {
    firstButton?.classList.remove('active');
  }

  if (id > 6) {
    setZone('all');
    setSignalType(`${name}`);
  } else {
    setZone(`${name}`);
    setSignalType('all');
  }
};

export const getFilteredSignals = ({
  signals,
  zone,
  signalType
}: GetFilteredSignalsProps) => {
  let filteredSignals: Signal[] = [];

  if (zone === 'all') {
    filteredSignals = signals;
  }

  if (zone === 'atp') {
    filteredSignals = [signals[0], signals[14], ...signals.slice(1, 14)];
  }

  if (zone === 'atp-4') {
    filteredSignals = [
      signals[0],
      signals[29],
      signals[14],
      ...signals.slice(1, 8)
    ];
  }

  if (zone === 'atp' || zone === 'atp-4') {
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

  if (zone === 'altp') {
    filteredSignals = [...signals.slice(18, 26), signals[5]];
  }

  if (zone === 'semi-atp') {
    filteredSignals = [signals[0], ...signals.slice(3, 8)];
  }

  if (zone === 'private') {
    filteredSignals = [
      signals[0],
      signals[2],
      ...signals.slice(4, 7),
      ...signals.slice(15, 18),
      signals[32],
      signals[29]
    ];
  }

  if (signalType === 'all') {
    if (zone !== 'all') {
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
  } else if (signalType === 'main') {
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
            signalType === 'shunting' ||
            signalType === 'warning' ||
            signalType === 'other'
              ? type === signalType
              : type === signalType || aspect.name === 'red'
          )
        };
      })
      .filter(({ info }) => info.length > 0);
  }
};

export const filterSigns = ({ name, stateSetters }: FilterSignsProps) => {
  const [setSignType] = stateSetters;

  setSignType(name);
};

export const getFilteredSigns = ({
  signs,
  signType
}: GetFilteredSignsProps) => {
  let filteredSigns: Sign[] = [];

  if (signType === 'all') {
    filteredSigns = signs;
  }

  if (signType === 'hand') {
    filteredSigns = [...signs.slice(0, 10)];
  }

  if (signType === 'pointers') {
    filteredSigns = [...signs.slice(10, 18)];
  }

  if (signType === 'textless') {
    filteredSigns = [...signs.slice(18, 34)];
  }

  if (signType === 'text-signs') {
    filteredSigns = [...signs.slice(34)];
  }

  return filteredSigns;
};
