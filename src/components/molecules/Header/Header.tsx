import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLinks, NavLinkProps } from '../NavLinks';
import { Button } from '../../atoms/Button';

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
          <NavLinks
            links={links}
            className={css.headerLinks}
            linkClassName={css.headerLinks__link}
          />
          <Button
            className={css.menuButton}
            onClick={() => setShowLinks(!showLinks)}
          >
            <GiHamburgerMenu className={css.menuButton__icon} />
          </Button>
        </div>
      </div>
      {showLinks && (
        <NavLinks
          links={links}
          className={css.headerLinks_mobile}
          linkContainerClassName={css.headerLinks_mobile__linkContainer}
          linkClassName={css.headerLinks_mobile__linkContainer__link}
          showMobileLinks={setShowLinks}
        />
      )}
    </>
  );
};
