'use client';

import { ZonePage, ZonePageProps } from '../../components/pages/ZonePage';
import { SignalProvider } from '../../context/SignalContext';
import GlobalStyle from '../../theme/GlobalStyles';

// remove after refactoring CIS container
import { CISSignalProvider } from './CISSignalContext';

export const CISZonePage = (cisZonePageProps: ZonePageProps) => {
  return (
    <>
      <GlobalStyle />
      <CISSignalProvider
        signalTypeSigns={cisZonePageProps.content.signalTypeSigns}
      >
        <SignalProvider content={cisZonePageProps.content}>
          <ZonePage {...cisZonePageProps} />
        </SignalProvider>
      </CISSignalProvider>
    </>
  );
};
