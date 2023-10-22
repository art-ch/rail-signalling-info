'use client';

import { ZonePage } from 'src/components/pages/ZonePage';
import { ZonePageMainProps } from 'src/components/pages/ZonePage/ZonePage.types';
import { CISZonePageContentRenderer } from 'src/containers/CIS/components/organisms/CISZonePageContentRenderer';
import { CISZonePageFilters } from 'src/containers/CIS/components/organisms/CISZonePageFilters';

import { useCISSignalContext } from './context';

export const CISZonePage = (cisZonePageProps: ZonePageMainProps) => {
  const { state } = useCISSignalContext();

  return (
    <ZonePage
      {...cisZonePageProps}
      state={state}
      Filters={CISZonePageFilters}
      ContentRenderer={CISZonePageContentRenderer}
    />
  );
};
