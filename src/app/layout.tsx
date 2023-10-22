import cx from 'classnames';
import { Roboto_Slab, Oswald } from 'next/font/google';

import api from 'src/api';
import { ASSET_DOMAIN_LINK } from 'src/api/cms';

import { NavLinkProps } from 'src/components/molecules/NavLinks';
import { Footer, FooterProps } from 'src/components/organisms/Footer';
import { Header, HeaderProps } from 'src/components/organisms/Header';

import { fetchReferences, getContent, getImage } from 'src/utils/cmsUtils';

import 'src/theme/styles.scss';

export const metadata = {
  title: 'Rail Signalling Info',
  description:
    'A unified place for information about railway signalling systems around the world'
};

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--primary-font',
  display: 'swap'
});
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--headings-font',
  display: 'swap'
});

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const rootLayoutData = await api.cms.getRootLayout();

  const [header, footer] = rootLayoutData.fields.content;

  const headerProps = getContent(header);

  const parsedHeaderLinks = await fetchReferences<NavLinkProps>(
    headerProps.links
  );

  const formattedHeaderProps: HeaderProps = {
    logo: getImage(headerProps.logo),
    links: parsedHeaderLinks
  };

  const footerProps = getContent(footer);

  const parsedFooterLinks = await fetchReferences<NavLinkProps>(
    footerProps.links
  );

  const formattedFooterProps: FooterProps = {
    links: parsedFooterLinks,
    copyright: footerProps.copyright
  };

  return (
    <html lang="en" className={cx(roboto_slab.variable, oswald.variable)}>
      <head>
        <link
          rel="shortcut icon"
          href={`${ASSET_DOMAIN_LINK}/${process.env.CONTENTFUL_SPACE_ID}/4QOhZRr93JdptDBg5ckRfO/3bf52028152ddacf7444dd5c10a0f28c/icon-logo.png`}
        />
      </head>
      <body>
        <Header {...formattedHeaderProps} />
        {children}
        <Footer {...formattedFooterProps} />
      </body>
    </html>
  );
}
