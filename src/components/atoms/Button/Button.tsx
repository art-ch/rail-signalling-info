import Link from 'next/link';
import cx from 'classnames';

import defaultCss from './Button.module.scss';

import { UIComponent } from '../../../types';
import { getCss } from '../../../utils/themeUtils';

export type ButtonProps = {
  title?: string;
  link?: string;
  onClick?: () => void;
  children: React.ReactNode;
} & UIComponent;

export const Button = ({
  link,
  onClick,
  className,
  customCss,
  disableDefaultCss,
  children
}: ButtonProps) => {
  const css = getCss(defaultCss, customCss, disableDefaultCss);

  if (link) {
    return (
      <Link href={link} onClick={onClick} className={cx(css.button, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cx(css.button, className)}>
      {children}
    </button>
  );
};
