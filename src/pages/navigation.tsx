import {
  NavigationPage,
  NavigationPageProps
} from '../components/pages/NavigationPage';

import api from '../api';

import { getContent, getImage } from '../utils/cmsUtils';

export default function Navigation(pageProps: NavigationPageProps) {
  return <NavigationPage {...pageProps} />;
}

export const getStaticProps = async () => {
  const navigationPage = await api.cms.getNavigationPage('/navigation');

  const { title, description, links } = navigationPage.fields;

  const parsedLinks = links.map((link) => {
    const { title, link: linkedTo, description, background } = getContent(link);

    const parsedBackground = getImage(background);

    return { title, link: linkedTo, description, background: parsedBackground };
  });

  return {
    props: {
      title,
      description,
      links: parsedLinks
    }
  };
};
