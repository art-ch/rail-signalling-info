import Link from 'next/link';

import cx from 'classnames';

import { UIComponent } from '../../../types';

import css from './NavLinks.module.scss';

export type NavLinkProps = { title: string; link: string };

export type NavLinksProps = {
  links: NavLinkProps[];
  showMobileLinks?: (state: false) => void;
  linkClassName?: string;
} & UIComponent;

export const NavLinks = ({
  links,
  showMobileLinks,
  className,
  linkClassName
}: NavLinksProps) => {
  return (
    <ul className={cx(css.container, className)}>
      {links.map(({ title, link }, id) => (
        <li key={id} className={css.link}>
          <Link
            className={cx(linkClassName)}
            href={link}
            onClick={() => (showMobileLinks ? showMobileLinks(false) : null)}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
