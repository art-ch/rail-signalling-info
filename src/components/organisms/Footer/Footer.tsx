import { Document } from '@contentful/rich-text-types';

import { RichText } from '../../atoms/RichText';
import { NavLinks, NavLinkProps } from '../../molecules/NavLinks';

import css from './Footer.module.scss';

export type FooterProps = {
  links: NavLinkProps[];
  copyright?: Document;
};

export const Footer = ({ links, copyright }: FooterProps) => {
  const copyrightClassNameList = {
    p_className: css.madeBy,
    a_className: css.madeBy__authorLink
  };

  return (
    <div className={css.container}>
      <NavLinks
        links={links}
        className={css.footerLinks}
        linkClassName={css.footerLinks__link}
      />
      {copyright && (
        <RichText content={copyright} classNameList={copyrightClassNameList} />
      )}
    </div>
  );
};
