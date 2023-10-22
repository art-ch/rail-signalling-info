import api from 'src/api';

import { ZonePageMainProps } from 'src/components/pages/ZonePage/ZonePage.types';
import { CISZonePage } from 'src/containers/CIS/CISZonePage';
import { CISSignalProvider } from 'src/containers/CIS/context/CISSignalContext';
import { getZonePageContent } from 'src/utils/cmsUtils';

export default async function CISZone() {
  const cisPage = await api.cms.getZonePage('/zones/cis');

  const { title, description, content, additionalInfo } = cisPage.fields;

  const pageProps: ZonePageMainProps = {
    title,
    description,
    content: getZonePageContent(content),
    additionalInfo
  };

  return (
    <CISSignalProvider content={pageProps.content}>
      <CISZonePage {...pageProps} />
    </CISSignalProvider>
  );
}
