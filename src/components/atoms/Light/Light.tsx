import cx from 'classnames';

import { getCss } from 'src/utils/themeUtils';

import { LightProps } from './Light.types';

import defaultCss from './Light.module.scss';

export const Light = ({
  size = 'default',
  color = 'turnedOff',
  className,
  customCss,
  disableDefaultCss
}: LightProps) => {
  const css = getCss(defaultCss, customCss, disableDefaultCss);

  return <div className={cx(css.light, css[size], css[color], className)} />;
};
