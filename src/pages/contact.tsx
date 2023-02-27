import { InfoPage, InfoPageProps } from '../components/pages/InfoPage';

import api from '../api';

export default function Contact(pageProps: InfoPageProps) {
  return <InfoPage {...pageProps} />;
}

export const getStaticProps = async () => {
  const contactPage = await api.cms.getInfoPage('/contact');

  const { title, subtitle } = contactPage.fields;

  return {
    props: {
      title,
      subtitle
    }
  };
};
