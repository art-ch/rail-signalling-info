import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLinks, NavLinkProps } from '../NavLinks';
import { Button } from '../../atoms/Button';

import defaultCss from './Header.module.scss';
import { getCss } from '../../../utils/themeUtils';
import { UIComponent } from '../../../types';

export type HeaderProps = {
  links: NavLinkProps[];
} & UIComponent;

export const Header = ({
  links,
  customCss,
  disableDefaultCss
}: HeaderProps) => {
  const [showLinks, setShowLinks] = useState(false);

  const css = getCss(defaultCss, customCss, disableDefaultCss);

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
            disableDefaultCss
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
