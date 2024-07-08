import React, { useEffect, useState } from 'react';

import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';

import { useScroll } from 'src/hooks/useScroll';

import { UIComponent } from '../../../types';
import { getCss } from '../../../utils/themeUtils';
import { Button } from '../../atoms/Button';
import { NavLinks, NavLinkProps } from '../../molecules/NavLinks';

import defaultCss from './Header.module.scss';

export type HeaderProps = {
  logo?: string;
  links: NavLinkProps[];
} & UIComponent;

export const Header = ({
  logo = '',
  links,
  customCss,
  disableDefaultCss
}: HeaderProps) => {
  const [showLinks, setShowLinks] = useState(false);

  const {
    scrollData: { scrollDirection }
  } = useScroll();

  const css = getCss(defaultCss, customCss, disableDefaultCss);

  const scrollDown = scrollDirection === 'down';

  useEffect(() => {
    if (scrollDown) {
      setShowLinks(false);
    }
  }, [scrollDown]);

  return (
    <>
      <div
        className={cx(css.container, {
          [css.hidden]: scrollDirection === 'down'
        })}
      >
        <div className={css.innerCentering}>
          <Link href="/" className={css.logo}>
            <Image src={logo} alt="logo" fill />
          </Link>
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
