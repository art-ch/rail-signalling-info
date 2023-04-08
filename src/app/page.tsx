import api from 'src/api';

import { HomePage, HomePageProps } from 'src/components/pages/HomePage';

import { getContent } from 'src/utils/cmsUtils';

export default async function Home() {
  const homePage = await api.cms.getHomePage('/');

  const { hero, heroButton } = homePage.fields;

  const pageProps: HomePageProps = {
    hero,
    heroButton: getContent(heroButton)
  };

  return <HomePage {...pageProps} />;
}
