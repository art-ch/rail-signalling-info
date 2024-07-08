import { client } from 'src/api/cms';
import { InfoPageModel } from 'src/types';

import { InfoPage, InfoPageProps } from '../../components/pages/InfoPage';

export default async function About() {
  const aboutPage = await client
    .getEntries<InfoPageModel>({
      content_type: 'infoPage',
      'fields.url[match]': '/about'
    })
    .then((data) => data.items[0]);

  const { title, subtitle, description } = aboutPage.fields;

  const pageProps: InfoPageProps = {
    title,
    subtitle,
    description
  };

  return <InfoPage {...pageProps} />;
}
