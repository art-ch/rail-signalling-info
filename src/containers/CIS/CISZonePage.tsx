'use client';

import { ZonePage, ZonePageProps } from '../../components/pages/ZonePage';
import GlobalStyle from '../../theme/GlobalStyles';
import { CISSignalProvider } from './CISSignalContext';

export const CISZonePage = (cisZonePageProps: ZonePageProps) => {
  return (
    <>
      <GlobalStyle />
      <CISSignalProvider
        signalTypeSigns={cisZonePageProps.content.signalTypeSigns}
      >
        <ZonePage {...cisZonePageProps} />
      </CISSignalProvider>
    </>
  );
};
