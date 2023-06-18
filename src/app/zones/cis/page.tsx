import api from 'src/api';

import { getContent } from 'src/utils/cmsUtils';

import { CISZonePage } from 'src/containers/CIS/CISZonePage';
import { ZonePageMainProps } from 'src/components/pages/ZonePage';
import { CISSignalProvider } from 'src/containers/CIS/context/CISSignalContext';

export default async function CISZone() {
  const cisPage = await api.cms.getZonePage('/zones/cis');

  const { title, description, filterToggler, content, additionalInfo } =
    cisPage.fields;

  const pageProps: ZonePageMainProps = {
    title,
    description,
    filterToggler: getContent(filterToggler),
    content: getContent(content),
    additionalInfo
  };

  return (
    <CISSignalProvider content={pageProps.content}>
      <CISZonePage {...pageProps} />
    </CISSignalProvider>
  );
}
