import React, { useState } from 'react';
import { NavLinks, NavLinkProps } from '../NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';

import css from './Header.module.scss';

export type HeaderProps = {
  links: NavLinkProps[];
};

export const Header = ({ links }: HeaderProps) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.innerCentering}>
          <div className={css.logo}>
            {/* Think up of logo */}
            <h1>Logo</h1>
          </div>
          <NavLinks className={css.headerLinks} links={links} />
          <button
            className={css.menuButton}
            onClick={() => setShowLinks(!showLinks)}
          >
            <GiHamburgerMenu className={css.menuButton__icon} />
          </button>
        </div>
      </div>
      {showLinks && (
        <NavLinks
          className={css.headerLinks__mobile}
          showMobileLinks={setShowLinks}
          links={links}
        />
      )}
    </>
  );
};
