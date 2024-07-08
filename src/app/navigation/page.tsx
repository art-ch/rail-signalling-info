import { client } from 'src/api/cms';
import { NavigationPageModel } from 'src/types';
import { getContent } from 'src/utils/cmsUtils';

import {
  NavigationPage,
  NavigationPageProps
} from '../../components/pages/NavigationPage';

export default async function Navigation() {
  const navigationPage = await client
    .getEntries<NavigationPageModel>({
      content_type: 'navigationPage',
      'fields.url[match]': '/navigation'
    })
    .then((data) => data.items[0]);

  const { title, description, links } = navigationPage.fields;

  const parsedLinks = links.map((link) => {
    const {
      title = '',
      link: linkedTo = '',
      description = ''
    } = getContent(link) || {};

    return { title, link: linkedTo, description };
  });

  const pageProps: NavigationPageProps = {
    title,
    description,
    links: parsedLinks
  };

  return <NavigationPage {...pageProps} />;
}
