import { Roboto_Slab, Oswald } from 'next/font/google';

import cx from 'classnames';

import { NavLinkProps } from '../components/molecules/NavLinks';
import { Header, HeaderProps } from '../components/organisms/Header';
import { Footer, FooterProps } from '../components/organisms/Footer';

import api from '../api';
import { fetchReferences, getContent, getImage } from '../utils/cmsUtils';

import '../theme/styles.scss';

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
          href="https://images.ctfassets.net/rwqkbzeong17/4QOhZRr93JdptDBg5ckRfO/3bf52028152ddacf7444dd5c10a0f28c/icon-logo.png"
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
