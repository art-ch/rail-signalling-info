import { client } from 'src/api/cms';
import { ZonePageMainProps } from 'src/components/pages/ZonePage/ZonePage.types';
import { CISZonePage } from 'src/containers/CIS/CISZonePage';
import { CISSignalProvider } from 'src/containers/CIS/context/CISSignalContext';
import { ZonePageModel } from 'src/types';
import { getZonePageContent } from 'src/utils/cmsUtils';

export default async function CISZone() {
  const cisPage = await client
    .getEntries<ZonePageModel>({
      content_type: 'zonePage',
      'fields.url[match]': '/zones/cis'
    })
    .then((data) => data.items[0]);

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
