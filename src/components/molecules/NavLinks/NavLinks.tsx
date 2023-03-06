import Link from 'next/link';

import cx from 'classnames';

import { UIComponent } from '../../../types';

import css from './NavLinks.module.scss';

export type NavLinkProps = { title: string; link: string };

export type NavLinksProps = {
  links: NavLinkProps[];
  showMobileLinks?: (state: false) => void;
} & UIComponent<{ linkContainerClassName?: string; linkClassName?: string }>;

export const NavLinks = ({
  links,
  showMobileLinks,
  className,
  linkContainerClassName,
  linkClassName
}: NavLinksProps) => {
  return (
    <ul className={cx(css.container, className)}>
      {links.map(({ title, link }, id) => (
        <li key={id} className={cx(css.linkContainer, linkContainerClassName)}>
          <Link
            className={cx(css.link, linkClassName)}
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
