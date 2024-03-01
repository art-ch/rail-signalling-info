import api from 'src/api';
import { ErrorPage, ErrorPageProps } from 'src/components/pages/ErrorPage';
import { getContent } from 'src/utils/cmsUtils';

export default async function NotFound() {
  const errorPage = await api.cms.getErrorPage('/notFound');

  const { code, hero, heroButton } = errorPage.fields;

  const pageProps: ErrorPageProps = {
    code,
    hero,
    heroButton: getContent(heroButton)
  };

  return <ErrorPage {...pageProps} />;
}
