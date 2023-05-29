import cx from 'classnames';
import { DwarfSignalProps } from 'src/components/organisms/DwarfSignal';

import { SignalProps } from 'src/components/organisms/Signal';

export type CSS = Record<string, string>;

export type InjectZoneSpecificSignalStylesProps = {
  signalProps: SignalProps | DwarfSignalProps;
  css: CSS;
};

export function getCss(
  defaultCss: CSS,
  customCss: CSS = {},
  disableDefaultCss?: boolean
): CSS {
  if (disableDefaultCss) return customCss;

  return Object.keys(customCss).reduce((mergedCss, key) => {
    return {
      ...mergedCss,
      [key]: defaultCss[key]
        ? `${defaultCss[key]} ${customCss[key]}`
        : customCss[key]
    };
  }, defaultCss);
}

export const injectZoneSpecificSignalStyles = ({
  signalProps,
  css
}: InjectZoneSpecificSignalStylesProps) => {
  const { className: additionalSignalClassName } = signalProps;

  return {
    plates: signalProps.plates.map((plate) => {
      const { lights, className: additionalPlateClassName } = plate;

      return {
        lights: lights.map((light) => {
          const { color, className: additionalLightClassName } = light;

          return { color, className: cx(css.light, additionalLightClassName) };
        }),
        className: cx(css.plate, additionalPlateClassName)
      };
    }),
    className: cx(css.signal, additionalSignalClassName)
  };
};
