import {
  NavigationPage,
  NavigationPageProps
} from '../../components/pages/NavigationPage';

import api from '../../api';

import { getContent, getImage } from '../../utils/cmsUtils';

export default async function Navigation() {
  const navigationPage = await api.cms.getNavigationPage('/navigation');

  const { title, description, links } = navigationPage.fields;

  const parsedLinks = links.map((link) => {
    const { title, link: linkedTo, description } = getContent(link);

    return { title, link: linkedTo, description };
  });

  const pageProps: NavigationPageProps = {
    title,
    description,
    links: parsedLinks
  };

  return <NavigationPage {...pageProps} />;
}
