import { InfoPage, InfoPageProps } from '../../components/pages/InfoPage';

import api from '../../api';

export default async function Contact() {
  const contactPage = await api.cms.getInfoPage('/contact');

  const { title, subtitle } = contactPage.fields;

  const pageProps: InfoPageProps = {
    title,
    subtitle
  };

  return <InfoPage {...pageProps} />;
}
