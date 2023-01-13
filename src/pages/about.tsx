import { InfoPage, InfoPageProps } from '../containers/InfoPage';

import api from '../api';

const AboutPage = (pageProps: InfoPageProps) => (
  <InfoPage {...pageProps} className="about-page" />
);

export default AboutPage;

export async function getStaticProps() {
  const aboutPage = await api.cms.getInfoPage('about');

  return {
    props: aboutPage.fields
  };
}
