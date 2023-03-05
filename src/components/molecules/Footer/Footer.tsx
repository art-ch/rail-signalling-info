import { RichTextContent } from 'contentful';

import { RichText } from '../../atoms/RichText';
import { NavLinks, NavLinkProps } from '../NavLinks';

import css from './Footer.module.scss';

export type FooterProps = {
  links: NavLinkProps[];
  copyright: RichTextContent;
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
      <RichText content={copyright} classNameList={copyrightClassNameList} />
    </div>
  );
};
