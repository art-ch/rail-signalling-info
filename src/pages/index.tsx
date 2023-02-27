import api from '../api';

import { HomePage, HomePageProps } from '../components/pages/HomePage';

import { getContent, getImage } from '../utils/cmsUtils';

export default function Home(pageProps: HomePageProps) {
  return <HomePage {...pageProps} />;
}

export const getStaticProps = async () => {
  const homePage = await api.cms.getHomePage('/');

  const { background, hero, button } = homePage.fields;

  return {
    props: {
      background: getImage(background),
      hero,
      button: getContent(button)
    }
  };
};
