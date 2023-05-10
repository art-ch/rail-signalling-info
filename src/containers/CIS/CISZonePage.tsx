'use client';

// remove after refactoring CIS container
import GlobalStyle from '../../theme/GlobalStyles';
// -----------------------------------------------------

import { ZonePage, ZonePageMainProps } from 'src/components/pages/ZonePage';
import { CISZonePageFilters } from 'src/containers/CIS/components/organisms/CISZonePageFilters';
import { CISZonePageContentRenderer } from 'src/containers/CIS/components/organisms/CISZonePageContentRenderer';

export const CISZonePage = (cisZonePageProps: ZonePageMainProps) => (
  <>
    <GlobalStyle />
    <ZonePage
      {...cisZonePageProps}
      Filters={CISZonePageFilters}
      ContentRenderer={CISZonePageContentRenderer}
    />
  </>
);
