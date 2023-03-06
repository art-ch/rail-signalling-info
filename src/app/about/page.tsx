import { InfoPage, InfoPageProps } from '../../components/pages/InfoPage';

import api from '../../api';

export default async function About() {
  const aboutPage = await api.cms.getInfoPage('/about');

  const { title, subtitle, description } = aboutPage.fields;

  const pageProps: InfoPageProps = {
    title,
    subtitle,
    description
  };

  return <InfoPage {...pageProps} />;
}
