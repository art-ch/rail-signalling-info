import React from 'react';
import Buttons from '../CIS/page-contents/Buttons';
import { LocomotiveSignals } from '../CIS/page-contents/LocomotiveSignals';
import SignalCards from '../CIS/page-contents/SignalCards';
import { SignCards } from '../CIS/page-contents/SignCards';

const CISPage = () => {
  return (
    <div>
      <h1>Signals from CIS Region</h1>
      <Buttons />
      <SignalCards />
      <LocomotiveSignals />
      <SignCards />
    </div>
  );
};

export default CISPage;
