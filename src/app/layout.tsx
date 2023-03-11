import { Header, HeaderProps } from '../components/organisms/Header';
import { Footer, FooterProps } from '../components/organisms/Footer';

import api from '../api';

import '../theme/styles.scss';
import { fetchReferences, getContent, getImage } from '../utils/cmsUtils';
import { NavLinkProps } from '../components/molecules/NavLinks';

export const metadata = {
  title: 'Rail Signalling Info',
  description:
    'A unified place for information about railway signalling systems around the world'
};

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
    <html lang="en">
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
