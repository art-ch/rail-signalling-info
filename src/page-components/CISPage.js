import React from 'react';

import Buttons from '../content/CIS/page-contents/Buttons';
import { LocomotiveSignals } from '../content/CIS/page-contents/LocomotiveSignals';
import SignalCards from '../content/CIS/page-contents/SignalCards';
import { SignCards } from '../content/CIS/page-contents/SignCards';

const CISPage = () => {
  return (
    <main>
      <h1>Signals from CIS Region</h1>
      <p>
        These signals are used on the territories of the former USSR countries
        such as Russia, Belarus, Ukraine and so on
      </p>
      <Buttons />
      <SignalCards />
      <LocomotiveSignals />
      <SignCards />
    </main>
  );
};

export default CISPage;
