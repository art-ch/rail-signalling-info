import { client } from 'src/api/cms/cms';

import { HomePage, HomePageProps } from 'src/components/pages/HomePage';
import { HomePageModel } from 'src/types';
import { getContent } from 'src/utils/cmsUtils';

export default async function Home() {
  const homePage = await client
    .getEntries<HomePageModel>({
      content_type: 'homePage',
      'fields.url[match]': '/'
    })
    .then((data) => data.items[0]);

  const { hero, heroButton } = homePage.fields;

  const pageProps: HomePageProps = {
    hero,
    heroButton: getContent(heroButton)
  };

  return <HomePage {...pageProps} />;
}
