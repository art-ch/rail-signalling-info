import { InfoPage, InfoPageProps } from '../containers/InfoPage';

import api from '../api';

const ContactPage = (pageProps: InfoPageProps) => <InfoPage {...pageProps} />;

export default ContactPage;

export async function getStaticProps() {
  const contactPage = await api.cms.getInfoPage('contact');

  return {
    props: contactPage.fields
  };
}
