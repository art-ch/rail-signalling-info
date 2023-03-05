import api from '../api';

import { HomePage, HomePageProps } from '../components/pages/HomePage';

import { getContent } from '../utils/cmsUtils';

export default async function Home() {
  const homePage = await api.cms.getHomePage('/');

  const { hero, button } = homePage.fields;

  const pageProps: HomePageProps = {
    hero,
    button: getContent(button)
  };

  return <HomePage {...pageProps} />;
}
