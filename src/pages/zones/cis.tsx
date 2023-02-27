import api from '../../api';

import { ZonePage, ZonePageProps } from '../../components/pages/ZonePage';

import { CISSignalProvider } from '../../containers/CIS/CISSignalContext';
import { getContent } from '../../utils/cmsUtils';

export default function CISPage(pageProps: ZonePageProps) {
  return (
    <CISSignalProvider signalTypeSigns={pageProps.content.signalTypeSigns}>
      <ZonePage {...pageProps} />
    </CISSignalProvider>
  );
}

export const getStaticProps = async () => {
  const cisPage = await api.cms.getZonePage('/zones/cis');

  const { title, description, content, additionalInfo } = cisPage.fields;

  return {
    props: {
      title,
      description,
      content: getContent(content),
      additionalInfo
    }
  };
};
