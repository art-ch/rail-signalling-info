import React, { useState } from 'react';
import { NavLinks, NavLinkProps } from '../NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi';

import css from './Header.module.scss';

export type HeaderProps = {
  links: NavLinkProps[];
};

export const Header = ({ links }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className={css.container}>
        <div className={css.innerCentering}>
          <div className={css.logo}>
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
      {showLinks && <NavLinks showMobileLinks={setShowLinks} links={links} />}
    </>
  );
};
