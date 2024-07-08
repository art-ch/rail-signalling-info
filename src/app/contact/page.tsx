import { client } from 'src/api/cms';
import { InfoPageModel } from 'src/types';

import { InfoPage, InfoPageProps } from '../../components/pages/InfoPage';

export default async function Contact() {
  const contactPage = await client
    .getEntries<InfoPageModel>({
      content_type: 'infoPage',
      'fields.url[match]': '/contact'
    })
    .then((data) => data.items[0]);

  const { title, subtitle } = contactPage.fields;

  const pageProps: InfoPageProps = {
    title,
    subtitle
  };

  return <InfoPage {...pageProps} />;
}
