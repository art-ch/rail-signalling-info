import api from 'src/api';

import { getContent, getZonePageContent } from 'src/utils/cmsUtils';

import { CISZonePage } from 'src/containers/CIS/CISZonePage';
import { ZonePageMainProps } from 'src/components/pages/ZonePage/ZonePage.types';
import { CISSignalProvider } from 'src/containers/CIS/context/CISSignalContext';

export default async function CISZone() {
  const cisPage = await api.cms.getZonePage('/zones/cis');

  const { title, description, filterToggler, content, additionalInfo } =
    cisPage.fields;

  const pageProps: ZonePageMainProps = {
    title,
    description,
    filterToggler: getContent(filterToggler),
    content: getZonePageContent(content),
    additionalInfo
  };

  return (
    <CISSignalProvider content={pageProps.content}>
      <CISZonePage {...pageProps} />
    </CISSignalProvider>
  );
}
