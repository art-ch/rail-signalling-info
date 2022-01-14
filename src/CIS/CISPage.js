import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Buttons from './page-contents/Buttons';
import { LocomotiveSignals } from './page-contents/LocomotiveSignals';
import SignalCards from './page-contents/SignalCards';
import { SignCards } from './page-contents/SignCards';

const CISPage = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <h1>Signals from CIS Region</h1>
        <Buttons />
        <SignalCards />
        <LocomotiveSignals />
        <SignCards />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.main`
  .signal-card {
    padding-bottom: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      width: 30rem;
    }
  }
`;

export default CISPage;
