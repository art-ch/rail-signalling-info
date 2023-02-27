import { InfoPage, InfoPageProps } from '../components/pages/InfoPage';

import api from '../api';

export default function About(pageProps: InfoPageProps) {
  return <InfoPage {...pageProps} />;
}

export const getStaticProps = async () => {
  const aboutPage = await api.cms.getInfoPage('/about');

  const { title, subtitle, description } = aboutPage.fields;

  return {
    props: {
      title,
      subtitle,
      description
    }
  };
};
