import React from 'react';
import Buttons from '../content/CIS/page-contents/Buttons';
import { LocomotiveSignals } from '../content/CIS/page-contents/LocomotiveSignals';
import SignalCards from '../content/CIS/page-contents/SignalCards';
import { SignCards } from '../content/CIS/page-contents/SignCards';

const CISPage = () => {
  return (
    <div>
      <h1>Signals from CIS Region</h1>
      <p>
        These signals are used in the countries of former USSR such as Russia,
        Belarus, Ukraine and so on
      </p>
      <Buttons />
      <SignalCards />
      <LocomotiveSignals />
      <SignCards />
    </div>
  );
};

export default CISPage;
