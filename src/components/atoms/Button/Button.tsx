import Link from 'next/link';
import cx from 'classnames';

import defaultCss from './Button.module.scss';

import { getCss } from '../../../utils/themeUtils';

import { ButtonProps } from './Button.types';

export const Button = ({
  link,
  size = 'default',
  onClick,
  className,
  customCss,
  disableDefaultCss,
  children
}: ButtonProps) => {
  const css = getCss(defaultCss, customCss, disableDefaultCss);

  const mutualClassNameList = cx(css.button, css[size], className);

  if (link) {
    return (
      <Link href={link} onClick={onClick} className={mutualClassNameList}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={mutualClassNameList}>
      {children}
    </button>
  );
};
