import { client } from 'src/api/cms';
import { ErrorPage, ErrorPageProps } from 'src/components/pages/ErrorPage';
import { ErrorPageModel } from 'src/types';
import { getContent } from 'src/utils/cmsUtils';

export default async function NotFound() {
  const errorPage = await client
    .getEntries<ErrorPageModel>({
      content_type: 'errorPage',
      'fields.url[match]': '/notFound'
    })
    .then((data) => data.items[0]);

  const { code, hero, heroButton } = errorPage.fields;

  const pageProps: ErrorPageProps = {
    code,
    hero,
    heroButton: getContent(heroButton)
  };

  return <ErrorPage {...pageProps} />;
}
