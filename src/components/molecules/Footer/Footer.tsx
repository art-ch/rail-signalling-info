import React from 'react';
import { NavLinks, NavLinkProps } from '../NavLinks';

import css from './Footer.module.scss';

export type HeaderProps = {
  links: NavLinkProps[];
};

export const Footer = ({ links }) => {
  return (
    <div className={css.container}>
      <NavLinks
        links={links}
        className={css.footerLinks}
        linkClassName={css.footerLinks__link}
      />
      <p className={css.madeBy}>
        Made by{' '}
        <a className={css.madeBy__author} href="https://github.com/art-ch">
          art-ch
        </a>
      </p>
    </div>
  );
};
