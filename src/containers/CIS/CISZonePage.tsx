'use client';

// remove after refactoring CIS container
import GlobalStyle from '../../theme/GlobalStyles';
import { CISSignalProvider } from './CISSignalContext';
// -----------------------------------------------------

import { ZonePage, ZonePageProps } from '../../components/pages/ZonePage';
import { SignalProvider } from '../../context/SignalContext';

import {
  filterSignals,
  getFilteredSignals,
  filterSigns,
  getFilteredSigns
} from './utils';

import { FilterHandlers } from '../../context/SignalContext/SignalContext.types';

export const CISZonePage = (cisZonePageProps: ZonePageProps) => {
  const filterHandlers: FilterHandlers = [
    filterSignals,
    getFilteredSignals,
    filterSigns,
    getFilteredSigns
  ];

  return (
    <>
      <GlobalStyle />
      <CISSignalProvider
        signalTypeSigns={cisZonePageProps.content.signalTypeSigns}
      >
        <SignalProvider
          content={cisZonePageProps.content}
          filterHandlers={filterHandlers}
        >
          <ZonePage {...cisZonePageProps} />
        </SignalProvider>
      </CISSignalProvider>
    </>
  );
};
