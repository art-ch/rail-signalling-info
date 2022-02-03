import React from 'react';

import SignalFilterButtons from '../content/CIS/page-contents/SignalFilterButtons';
import SignalCards from '../content/CIS/page-contents/SignalCards';
import { LocomotiveSignals } from '../content/CIS/page-contents/LocomotiveSignals';
import SignFilterButtons from '../content/CIS/page-contents/SignFilterButtons';
import { SignCards } from '../content/CIS/page-contents/SignCards';

const CISPage = () => {
  return (
    <main>
      <h1>Signals from CIS Region</h1>
      <p>
        These signals are used on the territories of the former USSR countries
        such as Russia, Belarus, Ukraine and so on
      </p>
      <SignalFilterButtons />
      <SignalCards />
      <LocomotiveSignals />
      <SignFilterButtons />
      <SignCards />
    </main>
  );
};

export default CISPage;
