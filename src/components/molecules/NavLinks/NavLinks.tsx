import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

import cx from 'classnames';

import { UIComponent } from '../../../types';

import css from './NavLinks.module.scss';

export type NavLinkProps = { title: string; href: string };

export type NavLinksProps = {
  links: NavLinkProps[];
  showMobileLinks?: (state: false) => void;
  linkClassName?: string;
} & UIComponent;

export const NavLinks = ({
  showMobileLinks,
  className,
  linkClassName
}: NavLinksProps) => {
  const links = [
    { title: 'Home', link: '/' },
    { title: 'Navigation', link: '/navigation' },
    { title: 'Contact', link: '/contact' },
    { title: 'About', link: '/about' }
  ];

  return (
    <ul className={cx(css.container, className)}>
      {links.map(({ title, link }, id) => (
        <li key={id} className={css.link}>
          <Link
            className={cx(linkClassName, 'no-underline-a')}
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
