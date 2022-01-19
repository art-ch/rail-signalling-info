import React from 'react';
import Navbar from '../components/Navbar';
import Buttons from './page-contents/Buttons';
import { LocomotiveSignals } from './page-contents/LocomotiveSignals';
import SignalCards from './page-contents/SignalCards';
import { SignCards } from './page-contents/SignCards';

const CISPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Signals from CIS Region</h1>
      <Buttons />
      <SignalCards />
      <LocomotiveSignals />
      <SignCards />
    </div>
  );
};

export default CISPage;
