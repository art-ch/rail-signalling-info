import React from 'react';
import { CISSignalContext } from '../CISSignalContext';

const SignalsByZone = () => {
  const { zone, renderSignals } = React.useContext(CISSignalContext);

  if (zone === 'all') {
    return renderSignals;
  }
  if (zone === 'main' || zone === 'fast') {
    return renderSignals.slice(0, 8);
  }
};

export default SignalsByZone;
