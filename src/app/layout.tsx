import cx from 'classnames';
import { Roboto_Slab, Oswald } from 'next/font/google';

import { ASSET_DOMAIN_LINK, client } from 'src/api/cms';
import { Footer, FooterProps } from 'src/components/organisms/Footer';
import { Header, HeaderProps } from 'src/components/organisms/Header';
import {
  FooterModel,
  HeaderModel,
  UnresolvedEntry,
  WebsiteModel
} from 'src/types';
import { fetchReferences, getContent, getImage } from 'src/utils/cmsUtils';

import 'src/theme/styles.scss';
import { filterOutUndefinedValues } from 'src/utils/miscelaneousUtils';

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
  const rootLayoutData = await client
    .getEntries<WebsiteModel>({
      content_type: 'layout',
      'fields.title[match]': 'Website'
    })
    .then((data) => data.items[0]);

  const [header, footer] = getContent(rootLayoutData)?.content || [];

  const headerProps = getContent(header as UnresolvedEntry<HeaderModel>);

  const headerLinkList = filterOutUndefinedValues(headerProps?.links);
  const formattedHeaderLinks = await fetchReferences(headerLinkList);

  const formattedHeaderProps: HeaderProps = {
    logo: headerProps && getImage(headerProps.logo),
    links: formattedHeaderLinks
  };

  const footerProps = getContent(footer as UnresolvedEntry<FooterModel>);

  const footerLinkList = filterOutUndefinedValues(footerProps?.links);
  const formattedFooterLinks = await fetchReferences(footerLinkList);

  const formattedFooterProps: FooterProps = {
    links: formattedFooterLinks,
    copyright: footerProps?.copyright
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
