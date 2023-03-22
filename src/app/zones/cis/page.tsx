import api from '../../../api';

import { getContent } from '../../../utils/cmsUtils';

import { CISZonePage } from '../../../containers/CIS/CISZonePage';
import { ZonePageProps } from '../../../components/pages/ZonePage';

export default async function CISZone() {
  const cisPage = await api.cms.getZonePage('/zones/cis');

  const { title, description, filterToggler, content, additionalInfo } =
    cisPage.fields;

  const pageProps: ZonePageProps = {
    title,
    description,
    filterToggler: getContent(filterToggler),
    content: getContent(content),
    additionalInfo
  };

  return <CISZonePage {...pageProps} />;
}
